//rcc :
import React, { Component } from "react";

export default class DemoClass extends Component {
  // phương thức render sẽ tự kích hoạt khi sử dụng thẻ Component
  render() {
    return (
      <div className="container bg-dark p-5">
        <p className="display-4">Title</p>
        <p>Content</p>
      </div>
    );
  }
}
