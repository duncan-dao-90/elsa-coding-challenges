import { Inject, Injectable } from '@nestjs/common';
import { IWebsocketUsecase } from '../websocket/websocket.interface';
import {
  ILeaderboardRepository,
  ILeaderboardUsecase,
} from './leaderboard.interface';

@Injectable()
export class LeaderboardService implements ILeaderboardUsecase {
  constructor(
    @Inject('LeaderboardRepositoryProvider')
    private repository: ILeaderboardRepository,
    @Inject('WebsocketUsecaseProvider')
    private wsService: IWebsocketUsecase,
  ) {}

  async updateUserScore(quizId: string, userId: string) {
    const newScore = await this.repository.updateUserScore(quizId, userId);

    // This would be event driven, but we call it directly here for simplicity
    // quiz:userscore:updated
    this.wsService.notifyQuizUserScoreUpdated(quizId, userId, newScore);

    const topTen = await this.repository.getTopTen(quizId);

    // This would be event driven, but we call it directly here for simplicity
    // leaderboard:updated
    this.wsService.notifyQuizLeaderboardUpdated(quizId, topTen);
  }

  getTopTen(quizId: string) {
    return this.repository.getTopTen(quizId);
  }
}
