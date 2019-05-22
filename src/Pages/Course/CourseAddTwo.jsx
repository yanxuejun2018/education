import React, { Component } from 'react'
import { Link } from "react-router-dom";
import course from "./../../Common/images/course.jpg"
export class CourseAddTwo extends Component {
  render() {
    return (
        <div className="body course-add">
            {/* <!-- 面包屑 --> */}
                <ol className="breadcrumb">
                <li><a href="javascript:;">课程管理</a></li>
                <li className="active">课程添加</li>
            </ol>
            <div className="steps">
                {/* <!-- 摘要 --> */}
                    <div className="brief">
                    <div className="thumb">
                        <img src={course} alt=""/>
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
                        <Link to={"/course/addOne"} className="done">
                            <b className="fa fa-check"></b>
                                基本信息
                            </Link>
                        </li>
                        <li>
                        <Link to={"/course/addTwo"} className="active"> 
                                <b>2</b>
                                课程图片
                            </Link>
                        </li>
                        <li>
                        <Link to={"/course/addThree"} className="done">
                                <b>3</b>
                                课时管理
                            </Link>
                        </li>
                    </ul>
                    {/* <!-- 课程图片 --> */}
                    <div className="content">
                        {/* <!-- 标题 --> */}
                        <div className="title">
                            <h5>课程封面</h5>
                        </div>
                        {/* <!-- 上传图片 --> */}
                        <div className="picture col-md-offset-2">
                            <div className="preview">
                            <img src={course}alt=""/>
                            </div>
                                <p className="tips">
                                    可上传jpg, gif, png格式文件, 图片建议尺寸大于400x225，文件大小不能超过2M。
                            </p>
                                <div className="col-md-2">
                            <Link to={"/course/addThree"} className="btn btn-danger btn-sm">下一步</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    )
  }
}

export default CourseAddTwo
