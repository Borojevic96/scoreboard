import { useDispatch, useSelector } from "react-redux";
import { setOngoingMatches } from "@reducers/app.ts";
import { getMatches, getOngoingMatches } from "@selectors/app.selectors.ts";

const MatchesList = () => {
  const dispatch = useDispatch();
  const matches = useSelector(getMatches);
  const ongoingMatches = useSelector(getOngoingMatches);

  return (
    <div>
      <h2>All matches</h2>
      <table>
        <thead>
          <tr>
            <th>Home team</th>
            <th>Away team</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {matches?.map((match) => {
            return (
              <tr key={match.home_team.name + match.away_team.name}>
                <td>{match.home_team.name}</td>
                <td>{match.away_team.name}</td>
                <td>
                  <button
                    type="button"
                    onClick={() => {
                      dispatch(
                        setOngoingMatches([
                          { ...match, started_at: new Date().toISOString() },
                        ])
                      );
                    }}
                    disabled={ongoingMatches.some(
                      (ongoingMatch) => ongoingMatch.id === match.id
                    )}
                  >
                    Start match
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MatchesList;
