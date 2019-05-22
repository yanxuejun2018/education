import React, { Component } from "react";
import { Link } from "react-router-dom";
import course from "./../../Common/images/course.jpg"
export class CourseAddOne extends Component {
  render() {
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
          {/* <!-- 摘要 --> */}
          <div className="brief">
            <div className="thumb">
              
              <img src={course} alt="" />
            </div>
            <dl className="info">
              <dt>从零玩转H5+C3</dt>
              <dd>讲师：叶建华老师</dd>
              <dd>课时：168</dd>
            </dl>
          </div>
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
            <form action="" className="basic form-horizontal">
              <div className="form-group">
                <label htmlFor="" className="col-md-2 control-label">
                  标题
                </label>
                <div className="col-md-8">
                  <input
                    type="text"
                    className="form-control input-sm"
                    value="从零玩转H5+C3"
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
                    className="form-control input-sm"
                    value="全程案例驱动讲解"
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="" className="col-md-2 control-label">
                  讲师
                </label>
                <div className="col-md-8">
                  <select name="" className="form-control input-sm">
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
                  <select name="" className="form-control input-sm">
                    <option value="">非连载课程</option>
                    <option value="">更新中</option>
                    <option value="">已完结</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="" className="col-md-2 control-label">
                  分类
                </label>
                <div className="col-md-8">
                  <select name="" className="form-control input-sm">
                    <option value="">一级分类</option>
                  </select>
                  <select name="" className="form-control input-sm">
                    <option value="">二级分类</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="" className="col-md-2 control-label">
                  课程简介
                </label>
                <div className="col-md-8 ckeditor">
                  <textarea name="" rows="15" className="form-control input-sm" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="" className="col-md-2 control-label">
                  标签
                </label>
                <div className="col-md-8">
                  <input
                    type="text"
                    className="form-control input-sm"
                    value="请输入标签"
                  />
                  <p className="help-block">标签将有利于您的课程被学生检索到</p>
                </div>
              </div>
              <div className="form-group">
                <div className="col-md-10">
                  <Link
                    to={"/course/addTwo"}
                    className="btn btn-danger btn-sm pull-right"
                  >
                    下一步
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default CourseAddOne;
