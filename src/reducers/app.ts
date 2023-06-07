import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Match, OngoingMatch } from "@types";

interface ScoreboardState {
  matches: Match[];
  ongoingMatches: OngoingMatch[];
}

const initialState: ScoreboardState = {
  matches: [],
  ongoingMatches: [],
};

export const scoreboard = createSlice({
  name: "scoreboard",
  initialState,
  reducers: {
    setMatches: (state, action: PayloadAction<Match[]>) => {
      state.matches = action.payload;
    },
    setOngoingMatches: (state, action: PayloadAction<OngoingMatch[]>) => {
      action.payload.forEach((item) => {
        state.ongoingMatches.push(item);
      });
    },
    updateOngoingMatch: (state, action: PayloadAction<OngoingMatch>) => {
      const updatedMatch = action.payload;
      const matchIndex = state.ongoingMatches.findIndex(
        (match) => match.id === updatedMatch.id
      );
      if (matchIndex !== -1) {
        state.ongoingMatches[matchIndex] = updatedMatch;
      }
    },
  },
});

export const { setOngoingMatches, setMatches, updateOngoingMatch } =
  scoreboard.actions;

export default scoreboard;
