import { Module } from '@nestjs/common';
import { RankController } from './rank.controller';
import { RankService } from './rank.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Rank } from './entities/rank.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Rank])],
  exports: [TypeOrmModule],
  controllers: [RankController],
  providers: [RankService],
})
export class RankModule {}
