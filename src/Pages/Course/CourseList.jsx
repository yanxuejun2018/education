import React, { Component } from 'react';
import { connect } from "react-redux";
import { getSourceDataAction } from "../../Store/actionCreators";
const IMG_PRE = 'http://localhost:1688/uploads/';

class CourseList extends Component {
  render() {
    const { sourceData } = this.props;
    // console.log(sourceData);
    /*
       course_intro: "全程案例驱动教学！"
        course_name: "HTML+CSS"
        course_page: "upload_0c1d4d95c0f6f7098ddab7d5d595c755.jpg"
        course_serialize_status: "更新中"
        course_sub_title: "全程案例驱动"
        course_tag: "html,css"
        course_teacher: "撩大"
        course_title: "html+css案例实战"
        main_category: "Web大前端"
        sub_category: "html+css"
    */
    return (
      <div className="container-fluid">
        <div className="body course-list">
          <ol className="breadcrumb">
            <li><a href="javascript:;">课程管理</a></li>
            <li className="active">课程列表</li>
          </ol>
          <div className="courses">
            {
              sourceData.map((source, index) => {
                return (
                  <div className="course" key={index}>
                    <div className="pic">
                      <img src={IMG_PRE + source.course_page} alt="" />
                    </div>
                    <div className="info">
                      <a href="javascript:;">{source.course_name}</a>
                      <ul className="list-unstyled">
                        <li>
                          <span>讲师：{source.course_teacher}</span>
                          <span>类别：{source.main_category}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.props.reqCourseData();
  }
}

const mapStateToProps = (state) => {
  return {
    sourceData: state.sourceData
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    reqCourseData() {
      const action = getSourceDataAction();
      dispatch(action);
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseList);