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
        <div className="firstContainer">
          <Card name={props.data[0]} char={props.chars[0]}/>
          <Card name={props.data[0]} char={props.chars[1]} />
          <Card name={props.data[0]} char={props.chars[2]}/>
          <Card name={props.data[0]} char={props.chars[3]}/>
          <Card name={props.data[0]} char={props.chars[4]}/>
          <Card name={props.data[0]} char={props.chars[5]}/>
          <Card name={props.data[0]} char={props.chars[6]}/>
          <Card name={props.data[0]} char={props.chars[7]}/>
          <Card name={props.data[0]} char={props.chars[8]}/>
          <Card name={props.data[0]} char={props.chars[9]}/>
          <Card name={props.data[0]} char={props.chars[10]}/>
          <Card name={props.data[0]} char={props.chars[11]}/>
        </div>
      </div>
  );
}

export default Display;




