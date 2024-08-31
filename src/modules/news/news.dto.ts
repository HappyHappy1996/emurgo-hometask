import { Type } from 'class-transformer';
import {
  IsDefined,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';

export class GetArticlesQueryDto {
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  page: number = 0;

  @IsNumber()
  @Type(() => Number)
  @Min(1)
  pageSize: number;
}

export class SearchDto {
  @IsDefined()
  @IsString()
  keyword: string;
}
