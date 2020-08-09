import React from "react";
import "./style.css";
import Card from "../Card";

let chars=["bambam","barney","betty","boss","dino","dude","fred","gary","pebbles","pebbles2","perry","wilma"];

function Display(props) {
  let styles= {
    headerStyle: {
      width: '300px'
    }
  }
  return (
      <div>
        <div className="firstContainer">
          { props.chars.map( (charString ,i) => 
            <Card char={ charString } key={ i }/>
          )}

        
        </div>
      </div>
  );
}

export default Display;




