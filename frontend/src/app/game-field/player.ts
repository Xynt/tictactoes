export enum Player {
  'NONE',
  'ONE',
  'TWO'
}

export namespace Player {
  export function isSameNotNonePlayer(players: Player[]): boolean {
    return players.every(v => {
      if (v === Player.NONE) {
        return false;
      } else {
        return v === players[0];
      }
    });
  }
}
