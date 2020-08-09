import React from "react";
import "./style.css";

function Card(props) {
  let styles= {
    headerStyle: {
      width: '300px'
    }
  }
  return (
    <div class="card"  style={styles.headerStyle}>
    <img src="..." class="card-img-top" alt="..." />
    <div class="card-body">
        <h5 class="card-title">{props.name}</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        
    </div>
    </div>
  );
}

export default Card;




