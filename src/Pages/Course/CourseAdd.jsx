import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getCategoryDataAction } from "./../../Store/actionCreators";
import { connect } from "react-redux";
class CourseAdd extends Component {
  constructor(props) {
    super(props);
    const addCourseData = this.props.addCourseData;

    this.state = {
      course_name: addCourseData.course_name
    };
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="body course-add">
          <ol className="breadcrumb">
            <li>
              <a href="javascript:;">课程管理</a>
            </li>
            <li className="active">课程添加</li>
          </ol>
          <div className="steps create">
            <div className="title">
              <h5>
                创建课程 <small>CREATE A COURSE</small>
              </h5>
            </div>
            <div className="form-horizontal  col-md-offset-3 col-md-6">
              <div className="form-group">
                <label htmlFor="" className="col-md-2 control-label">
                  课程名称
                </label>
                <div className="col-md-9">
                  <input
                    type="text"
                    className="form-control input-sm"
                    placeholder="请填写课程名称"
                    value={this.state.course_name}
                    onChange={e => {
                      this._dealInputValue(e);
                    }}
                  />
                  <small className="text-danger">
                    注意: 课程名称即对外展示的信息
                  </small>
                </div>
              </div>
              <div className="col-md-11">
                <button
                  onClick={() => {
                    this._dealClick();
                  }}
                  className="btn btn-danger btn-sm pull-right"
                >
                  创建课程
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.props.reqCategoryData();
  }
  _dealInputValue(e) {
    const val = e.target.value;
    this.setState({
      course_name: val
    });
  }
  _dealClick() {
    const { course_name } = this.state;
    if (course_name === null || course_name === "") {
      alert("课程名称不能为空");
      return;
    }
    this.props.addCourseData.course_name = course_name;
   
    this.props.history.push("/course/addOne");
  }
}

const mapStateToProps = state => {
  return {
    addCourseData: state.addCourseData
  };
};
const mapDispatchToProps = dispatch => {
  return {
    reqCategoryData() {
      const action = getCategoryDataAction();
      dispatch(action);
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CourseAdd);
