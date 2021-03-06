import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  } from "react-router-dom";
import Home from './components/Home/Home';
import ClubDetails from './components/ClubDetails/ClubDetails';
import NotFound from './components/NotFound/NotFound';


function App() {
  return (
    <Router>
      <Switch>
      <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/club-details/:clubId">
            <ClubDetails></ClubDetails>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
