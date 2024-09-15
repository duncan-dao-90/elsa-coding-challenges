export type TLeaderboardItem = {
  userId: string;
  score: number;
};

export interface IWebsocketUsecase {
  notifyQuizUserScoreUpdated: (
    quizId: string,
    userId: string,
    score: number,
  ) => void;

  notifyQuizLeaderboardUpdated: (
    quizId: string,
    data: TLeaderboardItem[],
  ) => void;
}
