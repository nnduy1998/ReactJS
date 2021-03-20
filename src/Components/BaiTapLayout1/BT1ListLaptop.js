import React, { Component } from "react";
import BT1Laptop from "./BT1Laptop";

export default class BT1ListLaptop extends Component {
  render() {
    return (
      <div className="bg-light pt-5 pb-5 container-fluid">
        <h1 className="text-center">BEST LAPTOP</h1>
        <div className="row">
          <div className="col-3">
            <BT1Laptop />
          </div>
          <div className="col-3">
            <BT1Laptop />
          </div>
          <div className="col-3">
            <BT1Laptop />
          </div>
          <div className="col-3">
            <BT1Laptop />
          </div>
        </div>
      </div>
    );
  }
}
