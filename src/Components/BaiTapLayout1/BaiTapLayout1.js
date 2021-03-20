import React, { Component } from "react";
import BT1Footer from "./BT1Footer";
import BT1Header from "./BT1Header";
import BT1ListLaptop from "./BT1ListLaptop";
import BT1ProductList from "./BT1ProductList";
import BT1Slides from "./BT1Slides";

export default class BaiTapLayout1 extends Component {
  render() {
    return (
      <div>
        <BT1Header />
        <BT1Slides />
        <BT1ProductList />
        <BT1ListLaptop />
        <BT1Footer />
      </div>
    );
  }
}
