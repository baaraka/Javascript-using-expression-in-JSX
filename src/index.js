import React from "react";
import ReactDom from "react-dom";

const name = "Baraka ganai";
const currentDate = new Date();

const year = currentDate.getFullYear();
console.log(year);

ReactDom.render(
  <div>
    <p>created by {name}</p>
    <p>copyright {year}</p>
  </div>,
  document.getElementById("root")
);
