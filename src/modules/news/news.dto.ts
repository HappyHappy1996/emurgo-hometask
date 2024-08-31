import { IsDefined, IsString } from 'class-validator';

export class SearchDto {
  @IsDefined()
  @IsString()
  keyword: string;
}
