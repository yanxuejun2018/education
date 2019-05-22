import React, { Component } from "react";
import { connect } from "react-redux";
import avatar from "./../../Common/uploads/xjp.jpg";
import { Link, NavLink } from "react-router-dom";
import { editUserData } from "../../Api";
// 获取本地的用户数据
const userData = JSON.parse(sessionStorage.getItem("userData"));
const IMG_PRE = "http://localhost:1688/uploads/";
class Aside extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected_flag: "one"
    };
  }

  render() {
    const { userData } = this.props;
    const { selected_flag } = this.state;
    return (
      <div className="aside">
        <div className="profile">
          <div className="avatar img-circle">
            <img
              src={userData.icon_url ? IMG_PRE + userData.icon_url : avatar}
            />
          </div>
          <h4>{userData.real_name}</h4>
        </div>
        <div className="navs">
          <ul className="list-unstyled">
            <li>
              <NavLink
                to={"/"}
                className={selected_flag === "one" ? "actives" : ""}
                onClick={() => {
                  this._dealWithClick("one");
                }}
              >
                <i className="fa fa-area-chart" />
                数据分析
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/user"}
                className={selected_flag === "two" ? "actives" : ""}

                onClick={()=>{
                  this._dealWithClick("two")
                }}
              >
                <i className="fa fa-users" />
                用户中心
              </NavLink>
            </li>
            <li>
              <a
                href="javascript:;"
                className={selected_flag === "three" ? "actives" : ""}
                onClick={() => {
                  this._dealWithClick("three")
                }}
              >
                <i className="fa fa-object-group" />
                商品管理
                <i className="arrow fa fa-angle-right" />
              </a>
              <ul className="list-unstyled">
                <li>
                  <NavLink to={"/course/add"}>商品添加</NavLink>
                </li>
                <li>
                  <NavLink to={"/course/category"}>商品分类</NavLink>
                </li>
                <li>
                  <NavLink to={"/course/list"}>商品列表</NavLink>
                </li>
                <li>
                  <NavLink to={"/course/topic"}>商品专题</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <Link
                to="/"
                className={selected_flag === "four" ? "actives" : ""}
                onClick={() => {
                  this._dealWithClick("one")
                }}
              >
                <i className="fa fa-bars" />
                运营中心
              </Link>
            </li>
            <li>
              <NavLink
                to={"/sowing"}
                className={selected_flag === "five" ? "actives" : ""}
                onClick={() => {
                  this._dealWithClick("five")
                }}
              >
                <i className="fa fa-calculator" />
                轮播图中心
              </NavLink>
            </li>
            <li>
              <a
                href="javascript:;"
                className={selected_flag === "six" ? "actives" : ""}
                onClick={() => {
                  this._dealWithClick("six")
                }}
              >
                <i className="fa fa-cog" />
                设置中心
                <i className="arrow fa fa-angle-right" />
              </a>
              <ul className="list-unstyled">
                <li>
                  <a href="javascript:;">站点设置</a>
                </li>
                <li>
                  <a href="javascript:;">用户设置</a>
                </li>
                <li>
                  <a href="javascript:;">角色管理</a>
                </li>
                <li>
                  <a href="javascript:;">商品设置</a>
                </li>
                <li>
                  <a href="javascript:;">运营设置</a>
                </li>
                <li>
                  <a href="javascript:;">财务设置</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    );
  }

  _dealWithClick(one) {
    this.setState({
      selected_flag:one
    })
  }
}
const mapStateToProps = state => {
  return {
    userData: state.userData
  };
};
export default connect(
  mapStateToProps,
  null
)(Aside);
