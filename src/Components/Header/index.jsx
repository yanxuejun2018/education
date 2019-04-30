import React, { Component } from 'react';
import {Link,NavLink} from "react-router-dom";

export default  class Header extends Component {
    render() {
        return (
                        <div className="header">
                            <nav className="navbar navbar-custom">
                                <div className="navbar-header">
                                    <a href="javascript:;" className="navbar-brand">阿臻科技数据分发管理系统</a>
                                </div>
                                <ul className="nav navbar-nav navbar-right">
                                    <li><a href="javascript:;"><i className="fa fa-cloud-upload"></i>云中心</a></li>
                                    <li><a href="javascript:;"><i className="fa fa-yelp"></i>分销中心</a></li>
                                    <li><a href="javascript:;"><i className="fa fa-xing"></i>CRM对接中心</a></li>
                                    <li><Link to="/mine"><i className="fa fa-user"></i>个人中心</Link></li>
                                    <li><a href="javascript:;"><i className="fa fa-bell"></i><span className="badge">20</span></a></li>
                                    <li><a href="javascript:;"><i className="fa fa-sign-out"></i>退出</a></li>
                                </ul>
                            </nav>
                        </div>

        );
    }
}

