import { Schema } from 'mongoose';

export type SubsType = {
  price: number;
  for: `${number}d`;
  discount: number;
  stripePriceId: string;
};

export type UserRoles = 'admin' | 'user';
export default interface UserType {
  _id: Schema.Types.ObjectId;
  name: string;
  email: string;
  password: string;
  phone: string;
  isBlocked: boolean;
  role: UserRoles;
  phoneCode: string;
  username: string;
  bio: string;
  notificationToken: string;
  notificationBadgeNumber: number;
  isNumberConfirm: boolean;
  sub: SubType;
  gamePoints: GamePointsType;
  gameRankings: GameRankingsType;
  giftValue: {
    total: number;
    lastWeek: number;
  };
  league: LeagueType;
  diamond: number;
  pic: { public_id: string; url: string };
  level: {
    name: LevelNames;
    totalGamePoints: number;
  };
  skins: SkinsType;
  friends: Schema.Types.ObjectId[];
  titles: Schema.Types.ObjectId[];
  achievements: {
    count: number;
    achievementId: Schema.Types.ObjectId;
  }[];
  cups: Schema.Types.ObjectId[];
  giftsGiven: Schema.Types.ObjectId[];
  giftsReceived: Schema.Types.ObjectId[];
  likesGiven: Schema.Types.ObjectId[]; // Added likesGiven field
  likesReceived: Schema.Types.ObjectId[]; // Added likesReceived field
  blocked: Schema.Types.ObjectId[]; // Added blocked field
  lastMatchNotFinish?: Schema.Types.ObjectId;
}
type GamePointsType = {
  currentWeek: number;
  currentMonth: number;
  lastWeek: number;
  lastMonth: number;
};
type GameRankingsType = {
  weekRank: number;
  monthRank: number;
  totalRank: number;
};
type LeagueType = {
  currentMonthPoints: number;
  lastMonthPoints: number;
  currentMonthRank: number;
  lastMonthRank: number;
};
type SkinsType = {
  cards: string[];
  backgrounds: string[];
  choseSkin: string;
};
export type SubType = {
  is: boolean;
  start_date: number | null;
  end_date: number | null;
  for: SubsType['for'] | null;
};
export type LevelNames = 'beginner' | 'intermediate' | 'advanced' | 'expert';
