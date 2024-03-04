import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Rank {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  rank: number;

  @Column()
  title: string;

  @Column()
  artist: string;
}
