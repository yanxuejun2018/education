import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

// 页面
import CourseAdd from "./CourseAdd";
import CourseCategory from "./CourseCategory";
import CourseList from "./CourseList";
import CourseTopic from "./CourseTopic";
import CourseAddOne from "./CourseAddOne";
import CourseAddTwo from "./CourseAddTwo";
import CourseAddThree from "./CourseAddThree";
import CourseCategoryAdd from './CourseCategoryAdd'
class CourseRouter extends Component {
  render() {
    return (
      <Switch>
        <Route path="/course/add" component={CourseAdd} />
        <Route path="/course/category" component={CourseCategory} />
        <Route path="/course/list" component={CourseList} />
        <Route path="/course/topic" component={CourseTopic} />
        <Route path="/course/addOne" component={CourseAddOne} />
        <Route path="/course/addTwo" component={CourseAddTwo} />
        <Route path="/course/addThree" component={CourseAddThree} />
        <Route path="/course/categoryAdd" component={CourseCategoryAdd} />
        <Redirect exact form="/course" to="/course/list" />
      </Switch>
    );
  }
}

export default CourseRouter;
