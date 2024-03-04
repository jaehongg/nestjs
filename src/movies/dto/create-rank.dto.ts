import { IsString, IsNumber } from 'class-validator';

export class CreateRankDto {
  @IsNumber()
  readonly id: number;

  @IsNumber()
  readonly rank: number;

  @IsString()
  readonly title: string;

  @IsString()
  readonly artist: string;

  // @IsOptional()
  // @IsString({ each: true })
  // readonly genres: string[];
}
