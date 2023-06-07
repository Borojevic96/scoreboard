import { useMemo } from "react";
import { useSelector } from "react-redux";
import { getOngoingMatches } from "@selectors/app.selectors.ts";

const MatchesSummary = () => {
  const ongoingMatches = useSelector(getOngoingMatches);
  const filteredOngoingMatches = useMemo(
    () =>
      ongoingMatches
        .filter((match) => !match.ended_at)
        .sort((teamA, teamB) => {
          const teamAScores = teamA.home_team.score + teamA.away_team.score;
          const teamBScores = teamB.home_team.score + teamB.away_team.score;
          const dateComparison =
            new Date(teamB.started_at).getTime() -
            new Date(teamA.started_at).getTime();

          if (teamAScores === teamBScores) {
            return dateComparison;
          }

          return teamBScores - teamAScores;
        }),
    [ongoingMatches]
  );

  return (
    <div>
      <h2>Summary</h2>
      {!filteredOngoingMatches?.length ? (
        "No ongoing matches at the moment."
      ) : (
        <table>
          <thead>
            <tr>
              <th>Home team</th>
              <th>Score</th>
              <th>Away team</th>
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
                  <td>{ongoingMatch.home_team.name}</td>
                  <td>{`${ongoingMatch.home_team.score} : ${ongoingMatch.away_team.score}`}</td>
                  <td>{ongoingMatch.away_team.name}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MatchesSummary;
