import mongoose from 'mongoose';
import {
  GeneralPlayingType,
  HakmType,
  IsBallotType,
  PlayingType,
  States,
  teamIds,
} from './PlayingTypes';
import { PlayersIDs } from './playerTypes';
import { Card, CardPlayer } from './CardTypes';
import UserType, { LevelNames } from './UserType';
export type OtherUserType = {
  _id: mongoose.Schema.Types.ObjectId;
  name: string;
  pic: UserType['pic'];
  level: UserType['level'];
  skins: UserType['skins'];
  sub: UserType['sub'];
};
export type PlayerType = {
  id: PlayersIDs;
  realPlayer: mongoose.Schema.Types.ObjectId | OtherUserType | null;
  teamId: teamIds;
  distributingOrder: number;
  playOrder: number;
  cards: CardPlayer[];
};
export interface PlayerWithCards {
  id: PlayersIDs;
  realPlayer: mongoose.Schema.Types.ObjectId | OtherUserType | null;
  teamId: teamIds;
  distributingOrder: number;
  playOrder: number;
  cards: Card[];
}

export type TeamType = {
  id: number;
  count: number;
  generalResult: number;
};

export type IRoom<T = {}> = T & {
  name: string;
  cards: string[];
  state: States;
  password: string | null;
  players: {
    firstPlayer: PlayerType;
    secondPlayer: PlayerType;
    thirdPlayer: PlayerType;
    fourthPlayer: PlayerType;
  };
  team1: TeamType;
  team2: TeamType;
  matchId: mongoose.Schema.Types.ObjectId | null; // just for league matches
  sentMsharia: SentMshariaType[];
  boots: BootsType;
  playerTurn: number;
  playingTurnNum: number;
  mshariaPower: number;
  playingType: GeneralPlayingType;
  roomType: RoomType;
  playingSpeed: RoomSpeedType;
  lowestPlayerLevel: LevelNames;
  spectators: mongoose.Schema.Types.ObjectId[];
  roomBackground: RoomBackgrounds;
  creator: mongoose.Schema.Types.ObjectId | null;
  // !need to add sound chat
  // voiceChat: boolean;
};
export type RoomBackgrounds = 'default' | 'diwania' | 'mshb' | 'wadi' | 'br';

export type RoomType = 'public' | 'private';

export type RoomSpeedType = 'fast' | 'normal' | 'slow';
type BootsType = {
  firstPlayer: boolean;
  secondPlayer: boolean;
  thirdPlayer: boolean;
  fourthPlayer: boolean;
};
type SentMshariaType = {
  bigCard: number;
  is100Same: boolean;
  bigMshroaPower: number;
  distributingOrder: number;
  teamId: teamIds;
  player: PlayersIDs;
  mshariaPower: number;
  cards: string[];
};
