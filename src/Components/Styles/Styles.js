import React, { Component } from "react";
//cách 1 : import đường dẫn css từ file component
import "./styles.css";
//Cách 2 : import css tại component
import style from "./styles.module.css";
export default class Styles extends Component {
  render() {
    const color = "red";
    return (
      <div className="container">
        <p className="text-red">Cybersoft</p>
        <p className={style.textGreen}>ahihi</p>
        <p className={style["textGreen"]}>ahihiiiii</p>
        <p className={`${style["textGreen"]} ${style["bg-black"]} display-4 `}>
          ahihiiiii
        </p>
        <section
          style={{
            backgroundColor: "black",
            color: color,
          }}
        >
          component
        </section>
      </div>
    );
  }
}
