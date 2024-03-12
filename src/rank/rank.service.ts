import { Injectable, NotFoundException } from '@nestjs/common';
import { Rank } from './entities/rank.entity';
import { CreateRankDto } from './dto/create-rank.dto';
import { UpdateRankDto } from './dto/update-rank.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class RankService {
  constructor(
    @InjectRepository(Rank)
    private rankRepository: Repository<Rank>,
  ) {}

  findAll(): Promise<Rank[]> {
    return this.rankRepository.find({ order: { rank: 'ASC' } });
  }

  findOne(id: number): Promise<Rank> {
    const rank = this.rankRepository.findOne({ where: { id } });
    if (!rank) {
      throw new NotFoundException(`Rank with ID ${id} not found`);
    }
    return rank;
  }

  create(rankData: CreateRankDto): Promise<Rank> {
    const newRank = this.rankRepository.create(rankData);
    return this.rankRepository.save(newRank);
  }

  async update(id: number, updateData: UpdateRankDto): Promise<number> {
    await this.rankRepository.update(id, updateData);
    return id;
  }

  async remove(id: number): Promise<number> {
    await this.rankRepository.delete(id);
    return id;
  }
}
