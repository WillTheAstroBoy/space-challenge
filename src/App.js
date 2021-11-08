
import './App.css';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import * as ROUTES from './constant/routes';
import { Home, Destinations, Crew, Technology } from './pages';

function App() {
  return (
      <Router>
        <Switch>
          <Route exact path={ROUTES.HOME} >
            <Home />
          </Route>
          <Route  path={ROUTES.DESTINATIONS} >
            <Destinations />
          </Route>
          <Route  path={ROUTES.CREW} >
            <Crew />
          </Route>
          <Route  path={ROUTES.TECHNOLOGY} >
            <Technology />
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
