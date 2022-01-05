import React, { useEffect, useState } from 'react';
import { fetchPlayersById } from '../../services/players';

export default function Player(props) {
  const [players, setPlayers] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPlayersById(props.match.params.id);
      setPlayers(data[0]);
      setLoading(false);
    };
    fetchData();
  }, [props.match.params.id]);
  if (loading) return <h1>loading</h1>;

  return (
    <div>
      <h1>{players.name}</h1>
      <h1>{players.position}</h1>
      <h2>Teams</h2>
    </div>
  );
}
//in the return statement render out player detail component
