import React, { Component } from "react";

export default class DanhSachKinh extends Component {
  renderDanhSachKinh = () => {
    let { mangDanhSachKinh } = this.props;
    //console.log(mangDanhSachKinh);
    return mangDanhSachKinh.map((kinh, index) => {
      return (
        <button
          onClick={() => this.props.chonKinh(kinh.id)}
          style={{
            marginLeft: "20px",
            marginTop: "10px",
            padding: "0",
            width: "100px",
            height: "65px",
          }}
          key={index}
          className="btn"
        >
          <img
            src={kinh.url}
            style={{
              width: "100px",
              height: "65px",
              border: "1px solid gray",
            }}
          />
        </button>
      );
    });
  };
  render() {
    return (
      <div
        className="bg-light mt-5"
        style={{ width: "800px", height: "170px" }}
      >
        {this.renderDanhSachKinh()}
      </div>
    );
  }
}
