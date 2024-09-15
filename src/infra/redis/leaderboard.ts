import { InjectRedis } from '@nestjs-modules/ioredis';
import { Injectable } from '@nestjs/common';
import Redis from 'ioredis';

import {
  ILeaderboardRepository,
  TLeaderboardItem,
} from 'src/use-cases/leaderboard/leaderboard.interface';

@Injectable()
export class LeaderboardRedis implements ILeaderboardRepository {
  constructor(@InjectRedis() private readonly redis: Redis) {}

  async updateUserScore(quizId: string, userId: string) {
    const newScore = await this.redis.zincrby(`quiz:${quizId}`, 1, userId);

    return Number(newScore);
  }

  async getTopTen(quizId: string) {
    const data = await this.redis.zrange(
      `quiz:${quizId}`,
      0,
      9,
      'REV',
      'WITHSCORES',
    );

    const topTenData: TLeaderboardItem[] = [];
    for (let i = 0; i < data.length; i += 2) {
      topTenData.push({ userId: data[i], score: Number(data[i + 1]) });
    }

    return topTenData;
  }
}
