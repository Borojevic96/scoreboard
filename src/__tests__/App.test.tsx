import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import MockStore from "../MockStore.tsx";
import App from "../App.tsx";

describe("App test", () => {
  it("should render MatchesList, MatchesScoreBoard, and MatchesSummary components", () => {
    render(
      <MockStore>
        <App />
      </MockStore>
    );

    expect(screen.getByText("All matches")).toBeInTheDocument();
    expect(screen.getByText("Scoreboard")).toBeInTheDocument();
    expect(screen.getByText("Summary")).toBeInTheDocument();
  });
});
