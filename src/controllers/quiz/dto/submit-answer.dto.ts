import { IsString } from 'class-validator';

export class SubmitAnswerDto {
  @IsString()
  quizId: string;

  @IsString()
  userId: string;
}
