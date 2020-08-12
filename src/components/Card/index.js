import React from "react";
import "./style.css";


function Card(props) {

  return (
      <div className="card" onClick={() => { props.clickr(props.id) } }>
        <div className="img-container">
          <img alt={props.dataObject.name} src={"images/chars/" + props.dataObject.name + ".jpg"} />
        </div>
      </div>
    );
  
}

export default Card;

