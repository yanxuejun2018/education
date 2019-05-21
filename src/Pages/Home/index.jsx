import React, { Component } from "react";
import { connect } from "react-redux";
import EchartsOne from '../../Components/Echarts/EchartsOne'
import EchartsTwo from './../../Components/Echarts/EchartsTwo'
import { getHomeDataAction } from "./../../Store/actionCreators";
class Home extends Component {
  render() {
  
    const { homeData } = this.props;
    return (
      <div className="container-fluid">
        <div className="body teacher-profile">
          <div className="profile">
            <div className="row c1">
              <div className="col-md-4">
                <div className="cell s1">
                  <i className="fa fa-users" />
                  <h4>登录用户</h4>
                  <h5>{homeData.login_user}</h5>
                </div>
              </div>
              <div className="col-md-4">
                <div className="cell s2">
                  <i className="fa fa-registered" />
                  <h4>新增注册</h4>
                  <h5>{homeData.new_register}</h5>
                </div>
              </div>
              <div className="col-md-4">
                <div className="cell s3">
                  <i className="fa fa-camera" />
                  <h4>新增商品</h4>
                  <h5>{homeData.new_stu_course}</h5>
                </div>
              </div>
            </div>
            <div className="row c1">
              <div className="col-md-4">
                <div className="cell s4">
                  <i className="fa fa-safari" />
                  <h4>新增管理员</h4>
                  <h5>{homeData.new_stu_classes}</h5>
                </div>
              </div>
              <div className="col-md-4">
                <div className="cell s5">
                  <i className="fa fa-opera" />
                  <h4>新增会员</h4>
                  <h5>{homeData.new_stu_course}</h5>
                </div>
              </div>
              <div className="col-md-4">
                <div className="cell s6">
                  <i className="fa fa-question" />
                  <h4>未回复问答</h4>
                  <h5>{homeData.not_reply}</h5>
                </div>
              </div>
            </div>
            <div className="lk-chart">
              <div className="chart">
                <EchartsOne/>
              </div>
              <div className="chart">
                <EchartsTwo/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.props.reqHomeData();
  }
}

const mapStateToProps = state => {
  return {
    homeData: state.homeData
  };
};
const mapDispatchToProps = dispatch => {
  return {
    reqHomeData() {
      const action = getHomeDataAction();
      dispatch(action);
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
