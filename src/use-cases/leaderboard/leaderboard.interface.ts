export type TLeaderboardItem = {
  userId: string;
  score: number;
};

export interface ILeaderboardUsecase {
  updateUserScore: (quizId: string, userId: string) => void;

  getTopTen: (quizId: string) => Promise<TLeaderboardItem[]>;
}

export interface ILeaderboardRepository {
  updateUserScore: (quizId: string, userId: string) => Promise<number>;

  getTopTen: (quizId: string) => Promise<TLeaderboardItem[]>;
}
