import React, { Component } from 'react';

import avatar from "./../../Common/uploads/xjp.jpg";
import {Link,NavLink} from "react-router-dom";
export default  class Aside extends Component {
    render() {
        return (
            <div className="aside">

                <div className="profile">

                    <div className="avatar img-circle">
                        <img src={avatar} alt="帅哥"/>
                    </div>
                    <h4>习近平</h4>
                </div>
                <div className="navs">
                    <ul className="list-unstyled">
                        <li>
                            <NavLink to={'/'} >
                                <i className="fa fa-area-chart"></i>
                                数据分析
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/user'} >
                                <i className="fa fa-users"></i>
                                用户中心
                            </NavLink>
                        </li>
                        <li>
                            <a href="javascript:;">
                                <i className="fa fa-object-group"></i>
                                商品管理
                                <i className="arrow fa fa-angle-right"></i>
                            </a >
                            <ul className="list-unstyled">
                                <li>
                                    <NavLink to={'/courseAdd'}>
                                        商品添加
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/courseCategory'}>
                                        商品列表
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/courseList'}>
                                        商品分类
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/courseTopic'}>
                                        商品专题
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="docent_list.html">
                                <i className="fa fa-bars"></i>
                                运营中心
                            </a>
                        </li>
                        <li>
                            <NavLink to={'/sowingList'} >
                                <i className="fa fa-calculator"></i>
                                轮播图中心
                            </NavLink>

                        </li>
                        <li>
                            <a href="javascript:;">
                                <i className="fa fa-cog"></i>
                                设置中心
                                <i className="arrow fa fa-angle-right"></i>
                            </a>
                            <ul className="list-unstyled">
                                <li><a href="javascript:;">站点设置</a></li>
                                <li><a href="javascript:;">用户设置</a></li>
                                <li><a href="javascript:;">角色管理</a></li>
                                <li><a href="javascript:;">商品设置</a></li>
                                <li><a href="javascript:;">运营设置</a></li>
                                <li><a href="javascript:;">财务设置</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>


        );
    }
}


