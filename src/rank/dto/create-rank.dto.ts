import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator';

export class CreateRankDto {
  @ApiProperty({ description: 'id' })
  @IsNumber()
  readonly id: number;

  @ApiProperty({ description: 'rank' })
  @IsNumber()
  readonly rank: number;

  @ApiProperty({ description: 'title' })
  @IsString()
  readonly title: string;

  @ApiProperty({ description: 'artist' })
  @IsString()
  readonly artist: string;

  // @IsOptional()
  // @IsString({ each: true })
  // readonly genres: string[];
}
