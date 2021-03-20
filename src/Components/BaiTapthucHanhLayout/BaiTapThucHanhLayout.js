import React, { Component } from "react";
import BT3Content from "./BT3Content";
import BT3Footer from "./BT3Footer";
import BT3Header from "./BT3Header";

export default class BaiTapThucHanhLayout extends Component {
  render() {
    return (
      <div>
        <BT3Header />
        <div className="container">
          <BT3Content />
        </div>
        <BT3Footer />
      </div>
    );
  }
}
