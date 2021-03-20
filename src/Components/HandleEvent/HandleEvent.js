import React, { Component } from "react";

export default class HandleEvent extends Component {
  // callback function => hàm đóng vài trò là tham số truyền vào biến hoặc hàm khác
  handleClick = () => {
    alert("hello1");
  };
  showMess = (name) => {
    alert(`Hello ${name}`);
  };
  render() {
    return (
      <div>
        <button id="btnClick" onClick={this.handleClick}>
          Click Me
        </button>
        <button
          id="btnClick"
          onClick={() => {
            alert("hello2");
          }}
        >
          Click Me
        </button>
        <button
          className="btn btn-success mt-2"
          onClick={() => this.showMess("Duy")}
        >
          Show message
        </button>
      </div>
    );
  }
}
