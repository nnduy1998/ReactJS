import React, { Component } from "react";
import Carts from "./Carts";
import ProductItem from "./ProductItem";

export default class Products extends Component {
  arrProduct = [
    {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: 'AMOLED, 6.2", Full HD+',
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },

    {
      maSP: 2,
      tenSP: "Meizu 16Xs",
      manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
      heDieuHanh: "Android 9.0 (Pie); Flyme",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 7600000,
      hinhAnh: "./img/meizuphone.jpg",
    },

    {
      maSP: 3,
      tenSP: "Iphone XS Max",
      manHinh: 'OLED, 6.5", 1242 x 2688 Pixels',
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 27000000,
      hinhAnh: "./img/applephone.jpg",
    },
  ];
  state = {
    productDetail: {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: 'AMOLED, 6.2", Full HD+',
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },
    gioHang: [],
  };
  themGioHang = (spClick) => {
    //console.log(spClick);
    //Xử lý setState chô giỏ hàng
    //B1: Từ sản phẩm đc click tạo ra sản phẩm giỏ hàng
    let spGioHang = {
      maSP: spClick.maSP,
      tenSP: spClick.tenSP,
      gia: spClick.giaBan,
      soLuong: 1,
      hinhAnh: spClick.hinhAnh,
    };
    //B2: Xử lý thêm giỏ hàng
    let gioHangCapNhat = [...this.state.gioHang];
    let index = gioHangCapNhat.findIndex(
      (item) => item.maSP === spGioHang.maSP
    );
    if (index !== -1) {
      gioHangCapNhat[index].soLuong += 1;
    } else {
      gioHangCapNhat.push(spGioHang);
      //gioHangCapNhat = [...gioHangCapNhat,spGioHang]
    }
    //B3 : set lại state sau khi xử lý
    this.setState({
      gioHang: gioHangCapNhat,
    });
  };
  xoaGioHang = (maSP) => {
    //console.log("maSP", maSP);
    //tạo ra biết gio hang cập nhật
    let gioHangCapNhat = [...this.state.gioHang];
    // Tìm kiếm phần tử đó trong mảng
    let index = gioHangCapNhat.findIndex((item) => item.maSP === maSP);
    if (index !== -1) {
      gioHangCapNhat.splice(index, 1);
    }
    this.setState({
      gioHang: gioHangCapNhat,
    });
  };
  tangGiamSoLuong = (maSP, tangGiam) => {
    console.log("maSP", maSP);
    console.log("tangGiam", tangGiam);
    let gioHangCapNhat = [...this.state.gioHang];
    let index = gioHangCapNhat.findIndex((item) => item.maSP === maSP);
    console.log(index);
    if (index !== -1) {
      if (tangGiam) {
        gioHangCapNhat[index].soLuong += 1;
      } else {
        if (gioHangCapNhat[index].soLuong > 1) {
          gioHangCapNhat[index].soLuong -= 1;
        }
      }
    }
    console.log(gioHangCapNhat[index].soLuong);
    this.setState({
      gioHang: gioHangCapNhat,
    });
  };
  renderProduct = () => {
    //Từ mảng sản phẩm => tạo giao diện danh sách sản phẩm như yêu cầu
    return this.arrProduct.map((sanPham, index) => {
      return (
        <div className="col-4" key={index}>
          <ProductItem
            themGioHang={this.themGioHang}
            sanPham={sanPham}
            viewDetail={this.viewDetail}
          />
        </div>
      );
    });
  };
  viewDetail = (sanPham) => {
    //let index = this.arrProduct.findIndex((sp) => sp.maSP === maSP);
    this.setState({
      productDetail: sanPham,
    });
  };
  render() {
    let {
      tenSP,
      maSP,
      hinhAnh,
      manHinh,
      ram,
      rom,
      cameraSau,
      cameraTruoc,
      heDieuHanh,
    } = this.state.productDetail;
    return (
      <div className="container">
        <Carts
          tangGiamSoLuong={this.tangGiamSoLuong}
          xoaGioHang={this.xoaGioHang}
          gioHang={this.state.gioHang}
        />
        <h3 className="text-success display-4">Danh sách sản phẩm</h3>
        <div className="row">{this.renderProduct()};</div>
        <div className="productDetail">
          <div className="row">
            <div className="col-4">
              <h5 className="text-center">{tenSP}</h5>
              <img src={hinhAnh} alt="" height={300} className="img-fluid" />
            </div>
            <div className="col-8">
              <h3 className="text-center display-4">Thông số kỹ thuật</h3>
              <table className="table">
                <thead>
                  <tr>
                    <td>Màn hình</td>
                    <td>{manHinh}</td>
                  </tr>
                  <tr>
                    <td>Hệ điều hành</td>
                    <td>{heDieuHanh}</td>
                  </tr>
                  <tr>
                    <td>Camera trước</td>
                    <td>{cameraTruoc}</td>
                  </tr>
                  <tr>
                    <td>Camera sau</td>
                    <td>{cameraSau}</td>
                  </tr>
                  <tr>
                    <td>Ram</td>
                    <td>{ram}</td>
                  </tr>
                  <tr>
                    <td>Rom</td>
                    <td>{rom}</td>
                  </tr>
                </thead>
                <tbody></tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
