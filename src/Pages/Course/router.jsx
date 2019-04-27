import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

// 页面
import CourseAdd from "./CourseAdd";
import CourseCategory from "./CourseCategory";
import CourseList from "./CourseList";
import CourseTopic from "./CourseTopic";
class CourseRouter extends Component {
  render() {
    return (
      <Switch>
        <Route path="/course/add" component={CourseAdd} />
        <Route path="/course/category" component={CourseCategory} />
        <Route path="/course/list" component={CourseList} />
        <Route path="/course/topic" component={CourseTopic} />
        <Redirect exact form="/course" to="/course/list" />
      </Switch>
    );
  }
}

export default CourseRouter;
