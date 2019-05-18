import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <nav className="navbar navbar-custom">
          <div className="navbar-header">
            <a href="javascript:;" className="navbar-brand">
              阿臻科技数据分发管理系统
            </a>
          </div>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="javascript:;">
                <i className="fa fa-cloud-upload" />
                云中心
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <i className="fa fa-yelp" />
                分销中心
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <i className="fa fa-xing" />
                CRM对接中心
              </a>
            </li>
            <li>
              <Link to="/mine">
                <i className="fa fa-user" />
                个人中心
              </Link>
            </li>
            <li>
              <a href="javascript:;">
                <i className="fa fa-bell" />
                <span className="badge">20</span>
              </a>
            </li>
            <li>
              <a href="javascript:;" onClick={() => this._logOut()}>
                <i className="fa fa-sign-out" />
                退出
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }

  _logOut() {
    // 1. 清空本地数据
    sessionStorage.removeItem("userData");
    // 2. 回到首页
    window.location.href = "/";
  }
}
