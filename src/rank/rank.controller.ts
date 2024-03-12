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
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('rank') // Router
@ApiTags('Rank API')
export class RankController {
  constructor(private readonly rankService: RankService) {}

  @Get()
  @ApiOperation({
    summary: 'Rank 전체 조회 API',
    description: 'Rank 전체 조회',
  })
  @ApiResponse({ description: 'Rank 전체 조회한다.' })
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
  @ApiOperation({ summary: 'Rank 조회 API', description: 'Rank 조회' })
  @ApiResponse({ description: 'Rank 조회한다.', type: Number })
  getOne(@Param('id') rankId: number): Promise<Rank> {
    // 파라미터를 가져올 수 있음
    return this.rankService.findOne(+rankId);
  }

  @Post()
  @ApiOperation({ summary: 'Rank 생성 API', description: 'Rank 추가' })
  @ApiResponse({ description: 'Rank 추가한다.', type: CreateRankDto })
  create(@Body() rankData: CreateRankDto): Promise<Rank> {
    // Body를 가져올 수 있음
    return this.rankService.create(rankData);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Rank 수정 API', description: 'Rank 수정' })
  @ApiResponse({ description: 'Rank 수정한다.', type: UpdateRankDto })
  path(
    @Param('id') rankId: number,
    @Body() upateData: UpdateRankDto,
  ): Promise<number> {
    return this.rankService.update(+rankId, upateData);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Rank 삭제 API', description: 'Rank 삭제' })
  @ApiResponse({ description: 'Rank 삭제한다.', type: Number })
  remove(@Param('id') rankId: number): Promise<number> {
    return this.rankService.remove(+rankId);
  }
}
