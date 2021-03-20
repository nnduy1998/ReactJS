import React, { Component } from "react";

export default class BaiTapChonXe extends Component {
  state = {
    srcImg: "./img/car/products/black-car.jpg",
  };
  changeColor = (newColor) => {
    this.setState({
      srcImg: `./img/car/products/${newColor}-car.jpg`,
    });
  };
  render() {
    return (
      <div className="container">
        <h1 className="display-4">Bài tập chọn xe</h1>
        <div className="row">
          <div className="col-6">
            <img src={this.state.srcImg} className="w-100" />
          </div>
          <div className="col-6">
            <h3>Change color</h3>
            <div className="row">
              <div className="col-3">
                <button
                  onClick={() => this.changeColor("black")}
                  style={{
                    backgroundColor: "black",
                    cursor: "pointer",
                    color: "white",
                  }}
                >
                  Black car
                </button>
              </div>
              <div className="col-3">
                <button
                  onClick={() => this.changeColor("red")}
                  style={{ backgroundColor: "red", cursor: "pointer" }}
                >
                  Red car
                </button>
              </div>
              <div className="col-3">
                <button
                  onClick={() => this.changeColor("steel")}
                  style={{ backgroundColor: "gray", cursor: "pointer" }}
                >
                  Gray car
                </button>
              </div>
              <div className="col-3">
                <button
                  onClick={() => this.changeColor("silver")}
                  style={{ backgroundColor: "silver", cursor: "pointer" }}
                >
                  Silver car
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
