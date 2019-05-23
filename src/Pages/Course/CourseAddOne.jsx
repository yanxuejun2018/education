import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import course from "./../../Common/images/course.jpg";
export class CourseAddOne extends Component {
  constructor(prpos) {
    super(prpos);
    const addCourseData = this.props.addCourseData;
    this.state = {
      // 课程标题
      course_title: addCourseData.course_title,
      // 课程副标题
      course_sub_title: addCourseData.course_sub_title,
      // 课程讲师
      course_teacher: addCourseData.course_teacher,
      // 课程连载状态 (0: 非连载状态, 1: 更新中， 2：已完结)
      course_serialize_status: addCourseData.course_serialize_status,
      // 主分类
      main_category: addCourseData.main_category,
      // 子分类
      sub_category: addCourseData.sub_category,
      // 课程简介
      course_intro: addCourseData.course_intro,
      // 课程标签
      course_tag: addCourseData.course_tag,
    
      // 二级分类(默认是第一个)
      sub_course: this.props.categoryData[0].sub_course || addCourseData.course_tag
    };
  }

  render() {
    const {
      course_title,
      course_sub_title,
      course_teacher,
      course_serialize_status,
      main_category,
      sub_category,
      course_intro,
      course_tag,
      sub_course
    } = this.state;

    const { categoryData } = this.props;
    return (
      <div className="body course-add">
        {/* <!-- 面包屑 --> */}
        <ol className="breadcrumb">
          <li>
            <a href="javascript:;">课程管理</a>
          </li>
          <li className="active">课程添加</li>
        </ol>
        <div className="steps">
          
          {/* <!-- 步聚 --> */}
          <ul className="forwards list-unstyled">
            <li>
              <Link to={"/course/addOne"} className="active">
                <b>1</b>
                基本信息
              </Link>
            </li>
            <li>
              
              <Link to={"/course/addTwo"}>
                <b>2</b>
                课程图片
              </Link>
            </li>
            <li>
              <Link to={"/course/addThree"}>
                <b>3</b>
                课时管理
              </Link>
            </li>
          </ul>
          {/* <!-- 基本信息 --> */}
          <div className="content">
            {/* <!-- 标题 --> */}
            <div className="title">
              <h5>课程信息</h5>
            </div>
            <div action="" className="basic form-horizontal">
              <div className="form-group">
                <label htmlFor="" className="col-md-2 control-label">
                  标题
                </label>
                <div className="col-md-8">
                  <input
                    type="text"
                    name="course_title"
                    className="form-control input-sm"
                    placeholder="填写课程标签"
                    onChange={e => {
                      this._dealInputValue(e);
                    }}
                    value={course_title}
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="" className="col-md-2 control-label">
                  副标题
                </label>
                <div className="col-md-8">
                  <input
                    type="text"
                    name="course_sub_title"
                    className="form-control input-sm"
                    placeholder="填写课程副标签"
                    onChange={e => {
                      this._dealInputValue(e);
                    }}
                    value={course_sub_title}
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="" className="col-md-2 control-label">
                  讲师
                </label>
                <div className="col-md-8">
                  <select
                    name="course_teacher"
                    className="form-control input-sm"
                    onChange={e => {
                      this._dealInputValue(e, "course_teacher");
                    }}
                    value={course_teacher}
                  >
                   
                    <option value="">叶建华</option>
                    <option value="">高新强</option>
                    <option value="">王顺子</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="" className="col-md-2 control-label">
                  连载状态
                </label>
                <div className="col-md-8">
                  <select
                    name=""
                    className="form-control input-sm"
                    onChange={e => {
                      this._dealInputValue(e, "course_serialize_status");
                    }}
                    value={course_serialize_status}
                  >
                    <option value="非连载课程">非连载课程</option>
                    <option value="更新中">更新中</option>
                    <option value="已完结">已完结</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="" className="col-md-2 control-label">
                  分类
                </label>
                <div className="col-md-8">
                  <select
                    name="main_category"
                    className="form-control input-sm"
                    onChange={e => {
                      this._dealInputValue(e, "main_category");
                    }}
                    value={main_category}
                  >
                    {categoryData.map((item, index) => {
                      return (
                        <option value={item.main_title} key={index}>
                          {item.main_title}
                        </option>
                      );
                    })}
                  </select>
                  <select
                    name=""
                    className="form-control input-sm"
                    onChange={e => {
                      this._dealInputValue(e, "sub_category");
                    }}
                    value={sub_category}
                  >
                    {sub_course.map((course, index) => {
                      return (
                        <option value={course.sub_title} key={index}>
                          {course.sub_title}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="" className="col-md-2 control-label">
                  课程简介
                </label>
                <div className="col-md-8 ckeditor">
                  <textarea
                    name="course_intro"
                    rows="15"
                    value={course_intro}
                    onChange={e => {
                      this._dealInputValue(e, "course_intro");
                    }}
                    className="form-control input-sm"
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="" className="col-md-2 control-label">
                  标签
                </label>
                <div className="col-md-8">
                  <input
                    type="text"
                    name="course_tag"
                    onChange={e => {
                      this._dealInputValue(e, course_tag);
                    }}
                    className="form-control input-sm"
                    value={course_tag}
                    placeholder="请输入标签"
                  />
                  <p className="help-block">标签将有利于您的课程被学生检索到</p>
                </div>
              </div>
              <div className="form-group">
                <div className="col-md-10">
                  <button
                    onClick={() => {
                      this._dealClick();
                    }}
                    className="btn btn-danger btn-sm pull-right"
                  >
                    下一步
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  _dealInputValue(e, type) {
    let inputValue = e.target.value;
    let inputName = e.target.name;
    // 2. 特殊情况处理
    if (type === "main_category") {
      this.props.categoryData.map((category, index) => {
        if (category.main_title === inputValue) {
          this.setState({
            sub_course: category.sub_course
          });
        }
      });
    }
    // 3. 更新状态
    this.setState({
      [inputName]: inputValue
    });
  }
  _dealClick() {
    // 1. 转化数据
    const {
      course_title,
      course_sub_title,
      course_teacher,
      course_serialize_status,
      main_category,
      sub_category,
      course_intro,
      course_tag
    } = this.state;

    // 2. 空验证
    if (
      course_title === "" ||
      course_sub_title === "" ||
      course_intro === "" ||
      course_tag === ""
    ) {
      alert("输入的内容不能为空");
      return;
    }

    // 3. 赋值
    this.props.addCourseData.course_title = course_title;
    this.props.addCourseData.course_sub_title = course_sub_title;
    this.props.addCourseData.course_teacher =
      course_teacher === "" ? "叶建华" : course_teacher;
    this.props.addCourseData.course_serialize_status =
      course_serialize_status === "" ? "非连载状态" : course_serialize_status;
    this.props.addCourseData.main_category =
      main_category === ""
        ? this.props.categoryData[0].main_title
        : main_category;
    this.props.addCourseData.sub_category =
      sub_category === ""
        ? this.props.categoryData[0].sub_course[0].sub_title
        : sub_category;
    this.props.addCourseData.course_intro = course_intro;
    this.props.addCourseData.course_tag = course_tag;

    // console.log(this.props.addCourseData);
    // debugger;

    this.props.history.push("/course/addTwo");
  }
  componentDidMount() {}
}
const mapStateToProps = state => {
  return {
    addCourseData: state.addCourseData,
    categoryData: state.categoryData
  };
};

export default connect(
  mapStateToProps,
  null
)(CourseAddOne);
