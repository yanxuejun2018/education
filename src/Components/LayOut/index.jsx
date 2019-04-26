import React, {Component} from 'react';
import Header from "../Header/index";
import Aside from "../Aside/index";
import routes from "../../Router";
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";

class LayOut extends Component {
    render() {
        return (
            <div>
                    <Header/>
                    <div className="main">
                        <Aside/>
                        {
                            routes.map((route, key)=>{
                                if(route.exact){
                                    return (
                                        <Route
                                            key={key}
                                            exact
                                            path={route.path}
                                            render={props=>(
                                                <route.component {...props} />
                                            )}
                                        />
                                    )
                                }else {
                                    return (
                                        <Route
                                            key={key}
                                            path={route.path}
                                            render={props=>(
                                                <route.component {...props} />
                                            )}
                                        />
                                    )
                                }
                            })
                        }
                </div>
            </div>
        );
    }
}

export default LayOut;