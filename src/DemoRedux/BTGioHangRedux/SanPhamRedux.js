import React, { Component } from "react";

export default class SanPhamRedux extends Component {
  render() {
    let { sanPham, viewDetail } = this.props;
    return (
      <div className="card text-left">
        <img
          className="card-img-top"
          src={sanPham.hinhAnh}
          alt=""
          height={300}
        />
        <div className="card-body">
          <h4 className="card-title">{sanPham.tenSP}</h4>
          <button
            onClick={() => viewDetail(sanPham)}
            className="btn btn-success"
          >
            Xem chi tiết
          </button>
          <button className="btn btn-danger ml-2">Thêm giỏ hàng</button>
        </div>
      </div>
    );
  }
}
