import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchPlayers } from '../../services/players';

export default function Players() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPlayers();
      setPlayers(data);
    };
    fetchData();
  }, []);

  return (
    <div className="players">
      <h1>Players</h1>
      {players.map((players) => (
        <Link key={players.id} to={`/players/${players.id}`}>
          {players.name}
        </Link>
      ))}
    </div>
  );
}
