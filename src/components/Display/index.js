import React from "react";
import "./style.css";
import Card from "../Card";



function Display(props) {
  let styles= {
    headerStyle: {
      width: '300px'
    }
  }
  return (
      <div>
        <div>
          <Card name={props.data[0]} />
          <Card name={props.data[0]} />
          <Card name={props.data[0]} />
          <Card name={props.data[0]} />
        </div>
        <div>
          <Card name={props.data[0]} />
          <Card name={props.data[0]} />
          <Card name={props.data[0]} />
          <Card name={props.data[0]} />
        </div>
        <div>
          <Card name={props.data[0]} />
          <Card name={props.data[0]} />
          <Card name={props.data[0]} />
          <Card name={props.data[0]} />
        </div>
      </div>
  );
}

export default Display;




