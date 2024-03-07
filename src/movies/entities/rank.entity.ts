import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Rank {
  @ApiProperty({ description: 'id' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: 'rank' })
  @Column()
  rank: number;

  @ApiProperty({ description: 'title' })
  @Column()
  title: string;

  @ApiProperty({ description: 'artist' })
  @Column()
  artist: string;
}
