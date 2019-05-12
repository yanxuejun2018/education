import React, { Component } from "react";
import LayOut from "./Components/LayOut/index";
import User from "./Pages/User";
import SwiongRouter from "./Pages/Rotation/router";
import CourseRouter from "./Pages/Course/router";
import MineRouder from "./Pages/Mine/router";
import Login from "./Pages/Login/index";
import Home from "./Pages/Home/index";
import * as constants from "./Store/actionTypes";
import ErrorPage from "./Pages/ErrorPage/index";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

class App extends Component {
  componentWillMount() {
    this.props.reqLocalData();
  }
  render() {
    let LayOutRouter = (
      <LayOut>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/user" component={User} />
          <Route path="/mine" component={MineRouder} />
          <Route path="/sowing" component={SwiongRouter} />
          <Route path="/course" component={CourseRouter} />
          <Route component={ErrorPage} />
        </Switch>
      </LayOut>
    );

    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={
              this.props.userData
                ? props => LayOutRouter
                : () => <Redirect to="/login" push />
            }
          />

          <Route path="/login" component={Login} />
          <Route path="/" render={props => LayOutRouter} />
        </Switch>
      </Router>
    );
  }
}
const mapStateToProps = state => {
  return {
    userData: state.userData
  };
};
const mapDispatchToProps = dispatch => {
  return {
    reqLocalData() {
      const userData = JSON.parse(sessionStorage.getItem("userData"));
      dispatch({
        type: constants.INIT_USER_DATA,
        userData
      });
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
