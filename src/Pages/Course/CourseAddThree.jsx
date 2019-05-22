import React, { Component } from "react";
import { Link } from "react-router-dom";
import course from "./../../Common/images/course.jpg"
export class CourseAddThree extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="body course-add">
          <ol className="breadcrumb">
            <li>
              <a href="javascript:;">课程管理</a>
            </li>
            <li className="active">课程添加</li>
          </ol>
          <div className="steps">
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
            <ul className="forwards list-unstyled">
              <li>
                <Link to={"/course/addOne"} className="done">
                  <b className="fa fa-check" />
                  基本信息
                </Link>
              </li>
              <li>
                <Link to={"/course/addTwo"} className="done">
                  <b className="fa fa-check" />
                  课程图片
                </Link>
              </li>
              <li>
                <Link to={"/course/addThree"} className="active">
                  <b>3</b>
                  课时管理
                </Link>
              </li>
            </ul>
            <div className="content">
              <div className="title">
                <h5>课时管理</h5>
                <a
                  src="javascript:;"
                  data-toggle="modal"
                  data-target="#lesson"
                  className="btn btn-danger btn-sm pull-right"
                >
                  <i className="fa fa-plus" />
                  课时
                </a>
              </div>
              <div className="lessons">
                <ul className="list-unstyled">
                  <li>
                    <i className="fa fa-video-camera" />
                    <span className="order">任务1</span>
                    <span className="name">H5+C3基础-常用标签</span>
                    <span className="duration">12:06</span>
                    <div className="action pull-right">
                      <a
                        href="javascript:;"
                        className="btn btn-primary btn-xs"
                        data-toggle="modal"
                        data-target="#lesson"
                      >
                        编辑
                      </a>
                      <a href="javascript:;" className="btn btn-primary btn-xs">
                        预览
                      </a>
                      <a href="javascript:;" className="btn btn-danger btn-xs">
                        删除
                      </a>
                    </div>
                  </li>
                  <li>
                    <i className="fa fa-video-camera" />
                    <span className="order">任务1</span>
                    <span className="name">H5+C3基础-常用标签</span>
                    <span className="duration">12:06</span>
                    <div className="action pull-right">
                      <a
                        href="javascript:;"
                        className="btn btn-primary btn-xs"
                        data-toggle="modal"
                        data-target="#lesson"
                      >
                        编辑
                      </a>
                      <a href="javascript:;" className="btn btn-primary btn-xs">
                        预览
                      </a>
                      <a href="javascript:;" className="btn btn-danger btn-xs">
                        删除
                      </a>
                    </div>
                  </li>
                  <li>
                    <i className="fa fa-video-camera" />
                    <span className="order">任务1</span>
                    <span className="name">H5+C3基础-常用标签</span>
                    <span className="duration">12:06</span>
                    <div className="action pull-right">
                      <a
                        href="javascript:;"
                        className="btn btn-primary btn-xs"
                        data-toggle="modal"
                        data-target="#lesson"
                      >
                        编辑
                      </a>
                      <a href="javascript:;" className="btn btn-primary btn-xs">
                        预览
                      </a>
                      <a href="javascript:;" className="btn btn-danger btn-xs">
                        删除
                      </a>
                    </div>
                  </li>
                  <li>
                    <i className="fa fa-video-camera" />
                    <span className="order">任务1</span>
                    <span className="name">H5+C3基础-常用标签</span>
                    <span className="duration">12:06</span>
                    <div className="action pull-right">
                      <a
                        href="javascript:;"
                        className="btn btn-primary btn-xs"
                        data-toggle="modal"
                        data-target="#lesson"
                      >
                        编辑
                      </a>
                      <a href="javascript:;" className="btn btn-primary btn-xs">
                        预览
                      </a>
                      <a href="javascript:;" className="btn btn-danger btn-xs">
                        删除
                      </a>
                    </div>
                  </li>
                  <li>
                    <i className="fa fa-video-camera" />
                    <span className="order">任务1</span>
                    <span className="name">H5+C3基础-常用标签</span>
                    <span className="duration">12:06</span>
                    <div className="action pull-right">
                      <a
                        href="javascript:;"
                        className="btn btn-primary btn-xs"
                        data-toggle="modal"
                        data-target="#lesson"
                      >
                        编辑
                      </a>
                      <a href="javascript:;" className="btn btn-primary btn-xs">
                        预览
                      </a>
                      <a href="javascript:;" className="btn btn-danger btn-xs">
                        删除
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>


        <div className="modal fade" id="lesson">
          <div className="modal-dialog" style={{ width: 800 }}>
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">&times;</button>
                <h4 className="modal-title">添加学习任务</h4>
              </div>
              <div className="modal-body">
                <form action="" className="form-horizontal">
                  <div className="form-group">
                    <label htmlFor="" className="col-md-2 control-label">*标题</label>
                    <div className="col-md-6">
                      <input type="text" className="form-control input-sm" />
                    </div>
                    <div className="col-md-2">
                      <div className="checkbox">
                        <label>
                          <input type="checkbox" /> 免费试学
                                                </label>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="" className="col-md-2 control-label">*视频</label>
                    <div className="col-md-8">
                      <div className="input-group">
                        <input type="file" />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="" className="col-md-2 control-label">*课程介绍</label>
                    <div className="col-md-8">
                      <textarea name="" rows="5" className="form-control input-sm" />
                    </div>
                  </div>
                  <div className="form-group form-inline">
                    <label htmlFor="" className="col-md-2 control-label">建议学习时长</label>
                    <div className="col-md-8">
                      <input type="text" className="form-control input-sm small" />
                      小时
                                            <p className="help-block">（如未设置，则默认学习时长为视频时长2倍取整。）</p>
                    </div>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-link btn-sm" data-dismiss="modal">取消</button>
                <button type="button" className="btn btn-danger btn-sm"> 添 加</button>
              </div>
            </div>
          </div>
            </div>

      </React.Fragment>
    );
  }
}

export default CourseAddThree;
