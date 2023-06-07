import { configureStore } from "@reduxjs/toolkit";
import scoreboardReducer from "./reducers/app.ts";

export const store = configureStore({
  reducer: {
    [scoreboardReducer.name]: scoreboardReducer.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
