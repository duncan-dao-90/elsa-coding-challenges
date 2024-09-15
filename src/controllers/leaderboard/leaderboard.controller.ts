import { Controller, Get, Inject, Query } from '@nestjs/common';
import { ILeaderboardUsecase } from 'src/use-cases/leaderboard/leaderboard.interface';
import { GetTopTenDto } from './dto/get-top-ten.dto';

@Controller('leaderboard')
export class LeaderboardController {
  constructor(
    @Inject('LeaderboardUsecaseProvider') private service: ILeaderboardUsecase,
  ) {}

  @Get('top-ten')
  async getTopTen(@Query() data: GetTopTenDto) {
    const { quizId } = data;

    const result = await this.service.getTopTen(quizId);

    return result;
  }
}
