import logo from "./logo.svg";
import "./App.css";
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import { ItemContainer } from "./components/Items/ItemContainer";

import { LandingPage } from "./components/landingPage/landingPage";
import { NotFound } from "./components/notFound";
import  Login  from './login-components/Login';
import  Signup from './login-components/Signup';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={LandingPage} />
        
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Signup} />
        <Route path='/' component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
