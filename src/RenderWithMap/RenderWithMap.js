import React, { Component } from "react";

export default class RenderWithMap extends Component {
  productList = [
    {
      id: 1,
      name: "iphone x",
      price: 1000,
      img: "https://picsum.photos/200/200",
    },
    {
      id: 2,
      name: "iphone xs",
      price: 2000,
      img: "https://picsum.photos/200/200",
    },
    {
      id: 3,
      name: "iphone xs max",
      price: 3000,
      img: "https://picsum.photos/200/200",
    },
  ];
  renderProduct = () => {
    // const arrDivProduct = [];
    // for (let i = 0; i < this.productList.length; i++) {
    //   //Mỗi lần duyệt lấy ra 1 object trong mảng
    //   let product = this.productList[i];
    //   const jsxDivProduct = (
    //     <div className="col-4">
    //       <div className="card text-left">
    //         <img className="card-img-top" src={product.img} alt />
    //         <div className="card-body">
    //           <h4 className="card-title">{product.name}</h4>
    //           <p className="card-text">{product.price}</p>
    //         </div>
    //       </div>
    //     </div>
    //   );
    //   arrDivProduct.push(jsxDivProduct);
    // }
    //return arrDivProduct;
    const contentJSX = this.productList.map((product, index) => {
      return (
        <div className="col-4">
          <div className="card text-left">
            <img className="card-img-top" src={product.img} alt />
            <div className="card-body">
              <h4 className="card-title">{product.name}</h4>
              <p className="card-text">{product.price}</p>
            </div>
          </div>
        </div>
      );
    });

    return contentJSX;
  };

  renderTableProduct = () => {
    return this.productList.map((product, index) => {
      return (
        <tr key={index}>
          <th>{product.id}</th>
          <th>{product.name}</th>
          <th>
            <img src={product.img} width={75} height={100} />
          </th>
          <th>{product.price}</th>
        </tr>
      );
    });
  };
  render() {
    return (
      <div className="container">
        <h1 className="text-center display-4">Danh sách sản phẩm</h1>
        <div className="row">{this.renderProduct()}</div>
        <div className="mt-5">
          <table className="table">
            <thead>
              <tr>
                <th>id</th>
                <th>name</th>
                <th>img</th>
                <th>price</th>
              </tr>
            </thead>
            <tbody>{this.renderTableProduct()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
