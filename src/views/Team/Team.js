import React, { useEffect, useState } from 'react';
import { fetchTeamById } from '../../services/teams';

export default function Team(props) {
  const [team, setTeam] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTeamById(props.match.params.id);
      setTeam(data[0]);
    };
    fetchData();
  }, [props.match.params.id]);
  return (
    //map through team.players
    <div>
      <header>Team Detail</header>
    </div>
  );
}

//in the return statement render out player detail component
