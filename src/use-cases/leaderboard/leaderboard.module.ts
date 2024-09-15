import { Module } from '@nestjs/common';
import { RedisServiceModule } from 'src/infra/redis/redis.module';
import { WebsocketModule } from '../websocket/websocket.module';
import { LeaderboardService } from './leaderboard.service';

@Module({
  imports: [RedisServiceModule, WebsocketModule],
  providers: [
    {
      provide: 'LeaderboardUsecaseProvider',
      useClass: LeaderboardService,
    },
  ],
  exports: ['LeaderboardUsecaseProvider'],
})
export class LeaderboardModule {}
