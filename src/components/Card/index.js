import React from "react";
import "./style.css";

function Card(props) {

  return (
    <div class="card">
    <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      
    <div class="card-body">
        <h5 class="card-title">{props.name}</h5>
        <p class="card-text">Something.</p>
        
    </div>
    </div>
  );
}

export default Card;




{/* <div class="card"  style={styles.headerStyle}> */}

// let styles= {
//   headerStyle: {
//     width: '300px'
//   }
// }

{/* <img src="..." class="card-img-top" alt="..." /> */}