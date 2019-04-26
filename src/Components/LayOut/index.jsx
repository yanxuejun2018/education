import React, { Component } from "react";
import Header from "../Header/index";
import Aside from "../Aside/index";
import routes from "../../Router";

class LayOut extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="main">
          <Aside />
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default LayOut;
