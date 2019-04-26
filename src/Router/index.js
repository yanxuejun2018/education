import Home from "../Pages/Home/index";

import SowingList from "../Pages/Rotation/SowingList";
import SowingAdd from "../Pages/Rotation/SowingAdd";
import SowingEdit from "../Pages/Rotation/SowingEdit";
import CourseAdd from "../Pages/Course/CourseAdd";
import User from "../Pages/User";
import Mine from "../Pages/Mine";
import CourseCategory from "../Pages/Course/CourseCategory";
import CourseList from "../Pages/Course/CourseList";
import CourseTopic from "../Pages/Course/CourseTopic";
let routes = [
  { path: "/", component: Home, exact: true },
  { path: "/sowingList", component: SowingList },
  { path: "/sowingAdd", component: SowingAdd },
  { path: "/mine", component: Mine },
  { path: "/user", component: User },
  { path: "/sowingEdit", component: SowingEdit },
  { path: "/courseAdd", component: CourseAdd },
  { path: "/courseCategory", component: CourseCategory },
  { path: "/courseList", component: CourseList },
  { path: "/courseTopic", component: CourseTopic }
];

export default routes;
