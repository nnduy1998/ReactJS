import React, { Component } from "react";
import BT1Product from "./BT1Product";

export default class BT1ProductList extends Component {
  render() {
    return (
      <div className="bg-dark pt-5 pb-5 container-fluid">
        <h1 className="text-white text-center">BEST SMARTPHONE</h1>
        <div className="row ">
          <div className="col-3">
            <BT1Product />
          </div>
          <div className="col-3">
            <BT1Product />
          </div>
          <div className="col-3">
            <BT1Product />
          </div>
          <div className="col-3">
            <BT1Product />
          </div>
        </div>
      </div>
    );
  }
}
