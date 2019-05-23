import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import _tool from "./../../Components/Tool/Tool";
import course from "./../../Common/images/course.jpg";
export class CourseAddTwo extends Component {
  constructor(props) {
    super(props);
    const course_page = this.props.addCourseData.course_page;
    this.state = {
      course_page: course_page
    };
  }
  render() {
    const { course_page } = this.state;
    return (
      <div className="body course-add teacher-profile">
        <ol className="breadcrumb">
          <li>
            <a href="javascript:;">课程管理</a>
          </li>
          <li className="active">课程添加</li>
        </ol>
        <div className="steps">
          <ul className="forwards list-unstyled">
            <li>
              <Link to="/course/addOne">
                <b>1</b>
                基本信息
              </Link>
            </li>
            <li>
              <Link to="/course/addTwo" className="active">
                <b>2</b>
                课程图片
              </Link>
            </li>
            <li>
              <Link to="/course/addThree">
                <b>3</b>
                课时管理
              </Link>
            </li>
          </ul>
          <div className="content settings">
            <div className="title">
              <h5>课程封面</h5>
            </div>
            <div className="picture col-md-offset-2">
              <div className="preview" style={{ height: 225 }}>
                <img src={course_page === "" ? course : course_page} alt="" />
                <input
                  ref="course_page"
                  type="file"
                  className="form-control input-sm"
                  placeholder="选择小图片"
                  onChange={() => this._previewImg("course_page")}
                />
                <div className="cover">
                  <i className="fa fa-upload" />
                </div>
              </div>
              <p className="tips">
                可上传jpg, gif, png格式文件,
                图片建议尺寸大于400x225，文件大小不能超过2M。
              </p>
              <div className="col-md-2">
                <button
                  onClick={() => this._dealClick()}
                  className="btn btn-danger btn-sm pull-right"
                >
                  下一步
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {}
  _previewImg(imgRef) {
    // 1. 根据ref获取用户上传的文件
    let file = this.refs[imgRef].files[0];
 
    // 2. 修改图片的信息
    let src = '';
    const reader = new FileReader();
    if (file) {
        reader.readAsDataURL(file);
    } else {
        src = '';
    }
    // 阅读器已经解析完毕
    reader.onloadend = () => {
        src = reader.result;
        this.setState({
            course_page: src
        })
    }
  }
  _dealClick() {
    // 1. 取出图片的内容
    const { course_page } = this.state;
    if (course_page === "") {
      alert("请上传封面图片");
      return;
    }

    this.props.addCourseData.course_page = course_page;
    this.props.addCourseData.course_page_url = this.refs.course_page.files[0];
    this.props.history.push("/course/addThree");
  }
}
const mapStateToProps = state => {
  return {
    addCourseData: state.addCourseData
  };
};
export default connect(
  mapStateToProps,
  null
)(CourseAddTwo);
