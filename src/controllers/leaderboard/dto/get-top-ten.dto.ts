import { IsString } from 'class-validator';

export class GetTopTenDto {
  @IsString()
  quizId: string;
}
