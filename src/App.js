import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./Store";
import LayOut from "./Components/LayOut/index";
import User from "./Pages/User";
import Mine from "./Pages/Mine";
import Login from "./Pages/Login/index";
import Home from "./Pages/Home/index";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class App extends Component {
  render() {
    let LayOutRouter = (
      <LayOut>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/user" component={User} />
          <Route path="/mine" component={Mine} />
        </Switch>
      </LayOut>
    );
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/" render={props => LayOutRouter} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
