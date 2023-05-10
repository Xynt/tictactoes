import {Player} from "./player";

export enum WinType {
  NONE,
  HORIZONTAL1,
  HORIZONTAL2,
  HORIZONTAL3,
  VERTICAL1,
  VERTICAL2,
  VERTICAL3,
  DIAGONAL1,
  DIAGONAL2,
}

export namespace WinType {
  export function hasWon(fields: Player[]): { type: WinType, player: Player } {
    let player = Player.NONE;
    let type = WinType.NONE;

    if (Player.isSameNotNonePlayer([fields[0], fields[3], fields[6]])) {
      type = WinType.HORIZONTAL1;
      player = fields[0];
    } else if (Player.isSameNotNonePlayer([fields[1], fields[4], fields[7]])) {
      type = WinType.HORIZONTAL2;
      player = fields[1];
    } else if (Player.isSameNotNonePlayer([fields[2], fields[5], fields[8]])) {
      type = WinType.HORIZONTAL3;
      player = fields[2];
    } else if (Player.isSameNotNonePlayer([fields[0], fields[1], fields[2]])) {
      type = WinType.VERTICAL1;
      player = fields[0];
    } else if (Player.isSameNotNonePlayer([fields[3], fields[4], fields[5]])) {
      type = WinType.VERTICAL2;
      player = fields[3];
    } else if (Player.isSameNotNonePlayer([fields[6], fields[7], fields[8]])) {
      type = WinType.VERTICAL3;
      player = fields[6];
    } else if (Player.isSameNotNonePlayer([fields[0], fields[4], fields[8]])) {
      type = WinType.DIAGONAL1;
      player = fields[0];
    } else if (Player.isSameNotNonePlayer([fields[2], fields[4], fields[6]])) {
      type = WinType.DIAGONAL2;
      player = fields[2];
    }

    return { type, player }
  }
}
