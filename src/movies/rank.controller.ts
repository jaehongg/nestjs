import {
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Patch,
  Body,
  // Query,
} from '@nestjs/common';
import { RankService } from './rank.service';
import { Rank } from './entities/rank.entity';
import { CreateRankDto } from './dto/create-rank.dto';
import { UpdateRankDto } from './dto/update-rank.dto';

@Controller('rank') // Router
export class RankController {
  constructor(private readonly rankService: RankService) {}

  @Get()
  getAll(): Promise<Rank[]> {
    return this.rankService.findAll();
  }

  // @Get('search')
  // search(@Query('year') searchingYear: string) {
  //   // 쿼리를 가져옴
  //   // 하단의 Get(:id) 데코레이터보다 밑에 있으면 search를 id로 인식해서 위에 둬야함
  //   return `Searching for a movie year : ${searchingYear}`;
  // }

  @Get(':id')
  getOne(@Param('id') rankId: number): Promise<Rank> {
    // 파라미터를 가져올 수 있음
    return this.rankService.findOne(+rankId);
  }

  @Post()
  create(@Body() rankData: CreateRankDto): Promise<Rank> {
    // Body를 가져올 수 있음
    return this.rankService.create(rankData);
  }

  @Patch(':id')
  path(
    @Param('id') rankId: number,
    @Body() upateData: UpdateRankDto,
  ): Promise<number> {
    return this.rankService.update(+rankId, upateData);
  }

  @Delete(':id')
  remove(@Param('id') rankId: number): Promise<number> {
    return this.rankService.remove(+rankId);
  }
}
