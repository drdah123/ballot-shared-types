import { Card, CardIds } from './CardTypes';
import { PlayerType } from './RoomModel';

export type PlayersIDs =
  | 'firstPlayer'
  | 'secondPlayer'
  | 'thirdPlayer'
  | 'fourthPlayer';
export type PlayOrderType = 0 | 1 | 2 | 3;
export type MshariaPowerType = 40 | 20 | 10 | 4;

export interface PlayerMshariaType {
  bigCard: CardIds;
  cards: Card[] | string[];
  is100Same?: boolean;
  mshariaPower: number;
  bigMshroaPower: MshariaPowerType;
}
export interface PlayersObjectType {
  firstPlayer: PlayerType;
  secondPlayer: PlayerType;
  thirdPlayer: PlayerType;
  fourthPlayer: PlayerType;
}
