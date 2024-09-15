import { Injectable } from '@nestjs/common';
import { IWebsocketUsecase, TLeaderboardItem } from './websocket.interface';

@Injectable()
export class WebsocketService implements IWebsocketUsecase {
  notifyQuizUserScoreUpdated(quizId: string, userId: string, score: number) {
    console.info('quiz event - user score updated: ', quizId, userId, score);
  }

  notifyQuizLeaderboardUpdated(quizId: string, data: TLeaderboardItem[]) {
    console.info('quiz event - leaderboard updated: ', quizId, data);
  }
}
