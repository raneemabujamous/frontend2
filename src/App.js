import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./component/Home";
import Favaroute from "./component/Favaroute";
import Header from "./component/Header";

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/fav">
              <Favaroute />
            </Route>
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
