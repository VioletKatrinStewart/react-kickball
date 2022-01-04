import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchTeams } from '../../services/teams';

export default function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTeams();
      setTeams(data);
    };
    fetchData();
  }, []);
  return (
    <div className="teams">
      <h1>Teams</h1>
      {teams.map((team) => (
        <Link key={team.id} to={`/teams/${team.id}`}>
          {team.name}
        </Link>
      ))}
    </div>
  );
}

//state for teams
//use effect to grab team data from fetch teams
//once you grab team data set into state so componenet can grab it
//inside of return map through teams state
