import React, { Component } from "react";
import { connect } from "react-redux";
import { getSowDataAction } from "./../../Store/actionCreators";
import { removeSowingData } from "./../../Api/index";
import { Link } from "react-router-dom";
const IMG_PRE = "http://localhost:1688/uploads/";

class Rotation extends Component {
  render() {
    
    const { SowData } = this.props;
    return (
      <div className="container-fluid">
        <div className="body advert">
          <ol className="breadcrumb">
            <li>
              <a href="javascript:;">轮播图管理</a>
            </li>
            <li className="active">轮播图列表</li>
          </ol>
          <div className="page-title">
            <Link to="/sowing/add" className="btn btn-danger btn-sm pull-right">
              添加轮播图
            </Link>
          </div>
          <div className="panel panel-default">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <td>序号</td>
                  <th>图片名称</th>
                  <th>大图</th>
                  <th>小图</th>
                  <th>跳转链接</th>
                  <th>上架时间</th>
                  <th>下架时间</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody>
                {SowData.map((item, index) => {
                  return (
                    <tr>
                      <td>{item._id}</td>
                      <td>{item.image_title}</td>
                      <td>
                        <img
                          src={IMG_PRE + item.image_url}
                          alt=""
                          style={{ width: 150 }}
                        />
                      </td>
                      <td>
                        <img
                          src={IMG_PRE + item.image_small_url}
                          alt=""
                          style={{ width: 150 }}
                        />
                      </td>
                      <td>{item.image_link}</td>
                      <td>{item.l_time.substr(0, 10)}</td>
                      <td>{item.s_time.substr(0, 10)}</td>
                      <td>
                        <Link
                          to={{
                            pathname: "/sowing/edit",
                            state: { SowData }
                          }}
                          className="btn btn-primary btn-xs"
                        >
                          编辑
                        </Link>
                        <button
                          onClick={() => this._removeSwoing(item._id)}
                          className="btn btn-danger btn-xs"
                        >
                          删除
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
  _removeSwoing(id) {
    removeSowingData(id)
      .then(res => {
        if (res.status_code === 200) {
          this.props.reqSowData();
        }
      })
      .catch(err => {
        console.log("删除轮播图失败");
      });
  }
  componentDidMount() {
    this.props.reqSowData();
  }
}
const mapStateToProps = state => {
  return {
    SowData: state.sowingData
  };
};
const mapDispatchToProps = dispatch => {
  return {
    reqSowData() {
      const action = getSowDataAction();
      dispatch(action);
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Rotation);
