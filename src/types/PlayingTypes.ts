import mongoose from 'mongoose';
import { PlayersIDs } from './playerTypes';
import { PlayerType } from './RoomModel';
import { LevelNames } from './UserType';

type EndResult = {
  team1: TeamTypeWithoutID;
  team2: TeamTypeWithoutID;
  playingType: GeneralPlayingType;
  winnerTeam: teamIds;
  // for league
  isBestOfThree?: boolean;
  leagueId?: string;
  round?: number;
};

type Mshroa = {
  power: string;
  cards: string[];
};
export type HakmType = 'Sbeet' | 'Diman' | 'Cheria' | 'Hac';
export type PlayingType =
  | {
      playingType: 'Hakm';
      hakmType: HakmType;
    }
  | {
      playingType: 'Sun';
    };
export interface PlayingCard {
  cardName: string;
  player: PlayersIDs;
  mshroa: Mshroa;
}
export type teamIds = 1 | 0;
export type BuyerType = {
  player: PlayersIDs;
  teamId: 0 | 1;
  distributingOrder: 0 | 1 | 2 | 3;
};
export type IsBallotType = { is: false } | { is: true; player: PlayersIDs };
export type PlayerChoice =
  | 'Hakm'
  | 'Sun'
  | 'Skip'
  | 'Worq'
  | 'Swa'
  | 'Ashkl'
  | 'دبل'
  | 'ثري'
  | 'فور'
  | 'قهوة';
export type States =
  | 'play'
  | 'playing_type'
  | 'end_result'
  | 'can_be_kboot_screen'
  | 'can_be_kboot'
  | 'gider_screen'
  | 'gid'
  | 'result'
  | 'message'
  | 'boots'
  | 'swa'
  | 'double'
  | 'rest'
  | 'worq'
  | 'waiting'
  | 'search'
  | 'player_enter'
  | 'player_exit'
  | 'spectator_enter'
  | 'spectator_exit';
export type ResType<T = {}> = T & {
  state: States;
  cards?: string[];
  _id?: string;
  isGidTrue?: boolean;
  playingType?: GeneralPlayingType;
  alnshra?: AlnshraType;
  players?: {
    firstPlayer?: PlayerType;
    secondPlayer?: PlayerType;
    thirdPlayer?: PlayerType;
    fourthPlayer?: PlayerType;
  };
  playedCards?: any;
  name?: string;
  team1?: any;
  team2?: any;
  boots?: any;
  playerTurn?: number;
  playingTurnNum?: number;
  // gid?: GidType[];
  playerId?: PlayersIDs;
  playerChoice?: PlayerChoice;
  roomId?: string;
  player?: PlayersIDs;
  eater?: PlayersIDs;

  playersOrder?: {
    firstPlayer: number;
    secondPlayer: number;
    thirdPlayer: number;
    fourthPlayer: number;
  };
  cardNotPlayed?: {
    cardName: string;
    player: PlayersIDs;
  };
  result?: {
    team1: TeamTypeWithoutID;
    team2: TeamTypeWithoutID;
  };
  endResult?:
    | EndResult
    | ({
        firstPlayer: EndResultPlayer | null;
        secondPlayer: EndResultPlayer | null;
        thirdPlayer: EndResultPlayer | null;
        fourthPlayer: EndResultPlayer | null;
      } & EndResult);
  roomBackground?: string;
  spectators?: mongoose.Schema.Types.ObjectId[];
  spectate?: boolean;
  // firstCard?: GidCard;
  // secondCard?: GidCard;
  // limitedPlayStates?: LimitedPlayStates;
};
export type GeneralPlayingType = 'free' | 'limited';
export type EndResultPlayer = {
  playerLevel: {
    name: LevelNames;
    levelNum: number;
    changedNum: number;
    nextLevelNum: number;
  };
  evaluating: {
    buying: string;
    general: string;
  };
};
export type AlnshraType = {
  playingType: PlayingType['playingType'];
  buyerTeam: teamIds;
  buyingResult: boolean;
  lastTeamEat: teamIds | null;
  team1: AlnshraTeam;
  team2: AlnshraTeam;
};
type AlnshraTeam = {
  eatingNum: number;
  almsharia: number;
  abnat: number;
  result: number;
};
type TeamTypeWithoutID = {
  count: number;
  generalResult: number;
};
