import './App.css';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { NavLink, Route, Switch } from 'react-router-dom';
import Teams from './views/Teams/Teams';
import Players from './views/Players/Players';
import Home from './Components/Home/Home';
import Player from './views/Player/Player';
import Team from './views/Team/Team';

function App() {
  return (
    <BrowserRouter>
      <header>
        <NavLink to="/teams" exact>
          Teams
        </NavLink>
        <NavLink to="/" exact>
          Home
        </NavLink>
        <NavLink to="/players" exact>
          Players
        </NavLink>
      </header>

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/teams/:id" component={Team} />
        <Route path="/teams" component={Teams} />
        <Route path="/players/:id" component={Player} />
        <Route path="/players" component={Players} />
      </Switch>
    </BrowserRouter>
  );
}
export default App;
