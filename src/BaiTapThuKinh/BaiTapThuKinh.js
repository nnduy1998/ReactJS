import React, { Component } from "react";
import DanhSachKinh from "./DanhSachKinh";
import NguoiMau from "./NguoiMau";

export default class BaiTapThuKinh extends Component {
  arrProduct = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./img/glassesImage/v1.png",
      desc:
        "1Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "./img/glassesImage/v2.png",
      desc:
        "2Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: "./img/glassesImage/v3.png",
      desc:
        "3Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 4,
      price: 30,
      name: "DIOR D6005U",
      url: "./img/glassesImage/v4.png",
      desc:
        "4Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 5,
      price: 30,
      name: "PRADA P8750",
      url: "./img/glassesImage/v5.png",
      desc:
        "5Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 6,
      price: 30,
      name: "PRADA P9700",
      url: "./img/glassesImage/v6.png",
      desc:
        "6Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 7,
      price: 30,
      name: "FENDI F8750",
      url: "./img/glassesImage/v7.png",
      desc:
        "7Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 8,
      price: 30,
      name: "FENDI F8500",
      url: "./img/glassesImage/v8.png",
      desc:
        "8Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 9,
      price: 30,
      name: "FENDI F4300",
      url: "./img/glassesImage/v9.png",
      desc:
        "9Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  ];
  state = {
    mangDanhSachKinh: [
      { id: 1, url: "./img/glassesImage/g1.jpg" },
      { id: 2, url: "./img/glassesImage/g2.jpg" },
      { id: 3, url: "./img/glassesImage/g3.jpg" },
      { id: 4, url: "./img/glassesImage/g4.jpg" },
      { id: 5, url: "./img/glassesImage/g5.jpg" },
      { id: 6, url: "./img/glassesImage/g6.jpg" },
      { id: 7, url: "./img/glassesImage/g7.jpg" },
      { id: 8, url: "./img/glassesImage/g8.jpg" },
      { id: 9, url: "./img/glassesImage/g9.jpg" },
    ],
    kinhDangChon: {},
  };
  chonKinh = (id) => {
    let kinhDangChonCapNhat = { ...this.state.kinhDangChon };
    let index = this.arrProduct.findIndex((item) => item.id === id);
    if (index !== -1) {
      kinhDangChonCapNhat = this.arrProduct[index];
    }
    this.setState({
      kinhDangChon: kinhDangChonCapNhat,
    });
  };
  render() {
    return (
      <div
        style={{
          backgroundImage: 'url("./img/glassesImage/background.jpg")',
          width: "100%",
          height: "100%",
          position: "fixed",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100px",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
          <h3 className="text-center text-light p-4">TRY GLASSES APP ONLIE</h3>
        </div>
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.3)",
            //paddingLeft: "325px",
          }}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            <NguoiMau kinhDangChon={this.state.kinhDangChon} />
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <DanhSachKinh
              chonKinh={this.chonKinh}
              mangDanhSachKinh={this.state.mangDanhSachKinh}
            />
          </div>
        </div>
      </div>
    );
  }
}
