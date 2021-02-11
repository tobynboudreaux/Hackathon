import logo from "./logo.svg";
import "./App.css";
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import { ItemContainer } from "./components/Items/ItemContainer";

import { LandingPage } from "./components/landingPage/landingPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={LandingPage} />
      </Switch>
    </Router>
  );
}

export default App;
