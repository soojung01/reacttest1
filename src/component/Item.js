import React from "react";
import "./Item.css";

function Item(props) {
  return <div className="itemBox">{props.item}</div>;
}

export default Item;
