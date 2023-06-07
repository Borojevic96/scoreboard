import { Match, OngoingMatch } from "@types";
import { RootState } from "../store.ts";

export const getMatches = (state: RootState): Match[] =>
  state.scoreboard.matches;
export const getOngoingMatches = (state: RootState): OngoingMatch[] =>
  state.scoreboard.ongoingMatches;
