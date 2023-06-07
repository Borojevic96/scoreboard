import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { setOngoingMatches } from "@reducers/app.ts";
import MatchesSummary from "@components/MatchesSummary/MatchesSummary.tsx";
import MockStore from "../../MockStore.tsx";
import { store } from "../../store.ts";
import ongoingMatchesMock from "../__mocks__/ongoingMatches.mock.ts";

describe("MatchesSummary", () => {
  it("should render 'No ongoing matches at the moment.' message when there are no ongoing matches", () => {
    render(
      <MockStore>
        <MatchesSummary />
      </MockStore>
    );
    const element = screen.getByText("No ongoing matches at the moment.");
    expect(element).toBeInTheDocument();
  });

  it("should render the ongoing matches table", () => {
    store.dispatch(setOngoingMatches(ongoingMatchesMock));

    render(
      <MockStore>
        <MatchesSummary />
      </MockStore>
    );

    expect(screen.getByText("Mexico")).toBeInTheDocument();
    expect(screen.getByText("0 : 0")).toBeInTheDocument();
    expect(screen.getByText("Canada")).toBeInTheDocument();
  });
});
