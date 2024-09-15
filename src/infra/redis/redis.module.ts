import { RedisModule } from '@nestjs-modules/ioredis';
import { Module } from '@nestjs/common';
import { LeaderboardRedis } from './leaderboard';

@Module({
  imports: [
    RedisModule.forRoot({
      type: 'single',
    }),
  ],
  providers: [
    {
      provide: 'LeaderboardRepositoryProvider',
      useClass: LeaderboardRedis,
    },
  ],
  exports: ['LeaderboardRepositoryProvider'],
})
export class RedisServiceModule {}
