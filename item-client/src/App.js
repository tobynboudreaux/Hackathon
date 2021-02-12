import logo from "./logo.svg";
import "./App.css";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { ItemContainer } from "./components/Items/ItemContainer";

import { LandingPage } from "./components/landingPage/landingPage";
import { NotFound } from "./components/notFound";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/items" component={ItemContainer} />
        <Route path="/" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
