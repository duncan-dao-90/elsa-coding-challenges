import { Controller, Get, Inject, Query } from '@nestjs/common';

import { ILeaderboardUsecase } from 'src/use-cases/leaderboard/leaderboard.interface';
import { SubmitAnswerDto } from './dto/submit-answer.dto';

@Controller('quiz')
export class QuizController {
  constructor(
    @Inject('LeaderboardUsecaseProvider')
    private leaderboardService: ILeaderboardUsecase,
  ) {}

  @Get('submit-answer')
  async submitAnswer(@Query() data: SubmitAnswerDto) {
    const { quizId, userId } = data;

    // TODO: Validate answer

    // This would be event driven, but we call it directly here for simplicity
    // quiz:answered event
    this.leaderboardService.updateUserScore(quizId, userId);

    return 'Answer submitted';
  }
}
