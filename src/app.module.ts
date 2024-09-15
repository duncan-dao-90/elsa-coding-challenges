import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LeaderboardController } from './controllers/leaderboard/leaderboard.controller';
import { QuizController } from './controllers/quiz/quiz.controller';
import { LeaderboardModule } from './use-cases/leaderboard/leaderboard.module';
import { WebsocketModule } from './use-cases/websocket/websocket.module';

@Module({
  imports: [LeaderboardModule, WebsocketModule],
  controllers: [AppController, LeaderboardController, QuizController],
  providers: [AppService],
})
export class AppModule {}
