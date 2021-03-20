import React, { Component } from "react";

export default class Carts extends Component {
  renderGioHang = () => {
    //Lấy dữ liệu từ component cha truyền vào thông qua props
    let { gioHang, xoaGioHang, tangGiamSoLuong } = this.props;
    return gioHang.map((spGH, index) => {
      return (
        <tr key={index}>
          <th>{spGH.maSP}</th>
          <th>{spGH.tenSP}</th>
          <th>
            <img src={spGH.hinhAnh} alt="123" width={75} />
          </th>
          <th>{spGH.gia.toLocaleString()}</th>
          <th>
            <button
              onClick={() => tangGiamSoLuong(spGH.maSP, true)}
              className="btn btn-primary"
            >
              +
            </button>
            {spGH.soLuong}
            <button
              onClick={() => tangGiamSoLuong(spGH.maSP, false)}
              className="btn btn-primary"
            >
              -
            </button>
          </th>
          <th>{(spGH.gia * spGH.soLuong).toLocaleString()}</th>
          <th>
            <button
              onClick={() => xoaGioHang(spGH.maSP)}
              className="btn btn-danger"
            >
              Xóa
            </button>
          </th>
        </tr>
      );
    });
  };
  render() {
    return (
      <div className="container">
        <h1>Giỏ hàng (1)</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Mã SP</th>
              <th>Tên SP</th>
              <th>Hình ảnh</th>
              <th>Đơn giá</th>
              <th>Số lượng</th>
              <th>Thành tiền</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{this.renderGioHang()}</tbody>
        </table>
      </div>
    );
  }
}
