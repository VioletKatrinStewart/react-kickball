import React, { useEffect, useState } from 'react';
import { fetchTeamById } from '../../services/teams';
import { Link } from 'react-router-dom';

export default function Team(props) {
  const [team, setTeam] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTeamById(props.match.params.id);
      setTeam(data[0]);
      setLoading(false);
    };
    fetchData();
  }, [props.match.params.id]);
  if (loading) return <h1>loading</h1>;

  return (
    //map through team.players
    <div>
      <header>Team Detail</header>
      <h1>{team.name}</h1>
      <h2>Players</h2>
      {team.players.map((player) => (
        <Link to={`/players/${player.id}`} key={player.id}>
          {player.name}
        </Link>
      ))}
    </div>
  );
}

//in the return statement render out player detail component
