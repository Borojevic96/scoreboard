export interface Team {
  name: string;
  score: number;
}

export interface Match {
  id: number;
  started_at: string | null;
  ended_at: string | null;
  home_team: Team;
  away_team: Team;
}

export interface OngoingMatch extends Omit<Match, "started_at"> {
  started_at: string;
}
