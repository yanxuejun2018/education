import React, { Component } from 'react';
import { connect } from "react-redux";
import { getSourceDataAction } from "../../Store/actionCreators";
const IMG_PRE = 'http://localhost:1688/uploads/';

class CourseList extends Component {
  render() {
    const { sourceData } = this.props;

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