import { act, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { setMatches, setOngoingMatches } from "@reducers/app.ts";
import MatchesList from "@components/MatchesList";
import MockStore from "../../MockStore.tsx";
import { store } from "../../store.ts";
import matchesMock from "../__mocks__/matches.mock.ts";
import ongoingMatchesMock from "../__mocks__/ongoingMatches.mock.ts";

describe("MatchesList", () => {
  it("should display all matches from the redux store", () => {
    store.dispatch(setMatches(matchesMock));
    render(
      <MockStore>
        <MatchesList />
      </MockStore>
    );

    act(() => {
      store.dispatch(setOngoingMatches(ongoingMatchesMock));
    });

    const startMatchButton = screen.getByRole("button", {
      name: /start match/i,
    });

    expect(screen.getByText("Mexico")).toBeInTheDocument();
    expect(screen.getByText("Canada")).toBeInTheDocument();
    expect(startMatchButton).toBeInTheDocument();
    expect(store.getState().scoreboard.matches).toEqual(matchesMock);
    expect(store.getState().scoreboard.ongoingMatches).toEqual(
      ongoingMatchesMock
    );
  });
});
