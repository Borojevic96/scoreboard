import { useEffect } from "react";
import { useDispatch } from "react-redux";
import matchesData from "@utils/dataProvider.ts";
import { setMatches } from "@reducers/app.ts";
import MatchesList from "@components/MatchesList";
import MatchesScoreBoard from "@components/MatchesScoreBoard";
import MatchesSummary from "@components/MatchesSummary";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setMatches(matchesData));
  }, []);

  return (
    <>
      <MatchesList />
      <MatchesScoreBoard />
      <MatchesSummary />
    </>
  );
};

export default App;
