import React, { Component } from "react";

export default class NguoiMau extends Component {
  render() {
    let { kinhDangChon } = this.props;
    return (
      <div
        className="nguoiMau "
        style={{
          width: "300px",
          height: "300px",
          position: "relative",
        }}
      >
        <div className=" text-left">
          <img
            src={kinhDangChon.url}
            style={{
              position: "absolute",
              zIndex: "1",
              width: "132px",
              //height: "30px",
              marginTop: "77px",
              marginLeft: "83px",
            }}
          />
          <img
            className="card-img-top"
            src="./img/glassesImage/model.jpg"
            alt="model"
            className="img-fluid"
            style={{ width: "100%", height: "100%", position: "absolute" }}
          />
          <div className="card-body">
            <h4
              className="card-title text-center"
              style={{
                position: "absolute",
                backgroundColor: "#bd791b73",
                zIndex: "1",
                left: "0",
                bottom: "24px",

                fontSize: "15px",
                width: "100%",
                fontWeight: "bold",
                color: "#ff5200",
              }}
            >
              {kinhDangChon.name}
            </h4>
            <p
              className="card-text text-left"
              style={{
                position: "absolute",
                backgroundColor: "#bd791b73",
                zIndex: "2",
                left: "0",
                bottom: "0",
                paddingLeft: "10px",
                color: "#fff",
                fontSize: "12px",
              }}
            >
              {kinhDangChon.desc}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
