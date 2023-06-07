import { useDispatch, useSelector } from "react-redux";
import { updateOngoingMatch } from "@reducers/app.ts";
import { getOngoingMatches } from "@selectors/app.selectors.ts";
import { OngoingMatch } from "@types";

const MatchesScoreBoard = () => {
  const dispatch = useDispatch();
  const ongoingMatches = useSelector(getOngoingMatches);
  const filteredOngoingMatches = ongoingMatches.filter(
    (match) => !match.ended_at
  );

  const handleScoreUpdate = (
    ongoingMatch: OngoingMatch,
    team: "home_team" | "away_team"
  ) => {
    dispatch(
      updateOngoingMatch({
        ...ongoingMatch,
        [team]: {
          ...ongoingMatch[team],
          score: ongoingMatch[team].score + 1,
        },
      })
    );
  };

  return (
    <div>
      <h2>Scoreboard</h2>
      {!filteredOngoingMatches?.length ? (
        "No ongoing matches at the moment."
      ) : (
        <table>
          <thead>
            <tr>
              <th>Home team</th>
              <th>Score</th>
              <th>Away team</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredOngoingMatches.map((ongoingMatch) => {
              return (
                <tr
                  key={
                    ongoingMatch.home_team.name + ongoingMatch.away_team.name
                  }
                >
                  <td>
                    <button
                      type="button"
                      onClick={() => {
                        handleScoreUpdate(ongoingMatch, "home_team");
                      }}
                    >
                      Add goal
                    </button>
                    {ongoingMatch.home_team.name}
                  </td>
                  <td>{`${ongoingMatch.home_team.score} : ${ongoingMatch.away_team.score}`}</td>
                  <td>
                    <button
                      type="button"
                      onClick={() => {
                        handleScoreUpdate(ongoingMatch, "away_team");
                      }}
                    >
                      Add goal
                    </button>
                    {ongoingMatch.away_team.name}
                  </td>
                  <td>
                    <button
                      type="button"
                      onClick={() => {
                        dispatch(
                          updateOngoingMatch({
                            ...ongoingMatch,
                            ended_at: new Date().toISOString(),
                          })
                        );
                      }}
                    >
                      End match
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MatchesScoreBoard;
