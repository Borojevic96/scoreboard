import { act, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import MatchesScoreBoard from "@components/MatchesScoreBoard";
import { setOngoingMatches, updateOngoingMatch } from "@reducers/app.ts";
import MockStore from "../../MockStore.tsx";
import { store } from "../../store.ts";
import ongoingMatchesMock from "../__mocks__/ongoingMatches.mock.ts";

describe("MatchesScoreBoard", () => {
  it("should render 'No ongoing matches at the moment.' message when there are no ongoing matches", () => {
    render(
      <MockStore>
        <MatchesScoreBoard />
      </MockStore>
    );
    const element = screen.getByText("No ongoing matches at the moment.");
    expect(element).toBeInTheDocument();
  });
  it("displays table when there are ongoing matches", () => {
    store.dispatch(setOngoingMatches(ongoingMatchesMock));
    render(
      <MockStore>
        <MatchesScoreBoard />
      </MockStore>
    );

    const tableElement = screen.getByRole("table");
    expect(tableElement).toBeInTheDocument();
  });
  it("update ongoing matches with ended_at data", () => {
    const updateOngoingMatchData = {
      ...ongoingMatchesMock[0],
      ended_at: new Date().toISOString(),
    };

    act(() => {
      store.dispatch(updateOngoingMatch(updateOngoingMatchData));
    });

    expect(store.getState().scoreboard.ongoingMatches[0].ended_at).not.toBe(
      null
    );
  });
});
