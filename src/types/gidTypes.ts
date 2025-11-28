import mongoose from 'mongoose';
import { Card, CardWithPlayer, Classes } from './CardTypes';
import { PlayersIDs, PlayOrderType } from './playerTypes';

export type CanBeKboot<Gid = any> = {
  gid: Gid[];
  gider: string;
  roomId: mongoose.Schema.Types.ObjectId;
  firstCheat: {
    playingTurnNum: number;
    playerTurn: number;
  };
};
// Types that were in gidStateModel
export type CardNotPlayedType = {
  cardName: string;
  player: PlayersIDs;
};

export type GidCardStateType = {
  cardName: string;
  playingTurnNum: number;
  playerTurn: PlayOrderType;
};

export interface GiderScreenProps {
  roomId: string;
  firstCard: GidCardStateType;
  secondCard: GidCardStateType;
  cardNotPlayed: CardNotPlayedType;
  y: boolean;
  giderScreenHeight: number;
}
export interface CardsPlayedAndNotSortedClass {
  played: CardWithPlayer[];
  notPlayed: CardWithPlayer[];
  class: Classes;
}

export interface CardsPlayerAndNotSortedClass {
  played: Card[];
  notPlayed: Card[];
  class: Classes;
}

export type CanBeKbootProps = {
  roomId: string;
  player: PlayersIDs;
  notCompleted?: boolean;
};
