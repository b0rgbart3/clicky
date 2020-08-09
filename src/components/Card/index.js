import React from "react";
import "./style.css";

function Card(props) {

  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={"images/chars/" + props.char + ".jpg"} />
      </div>
      
    {/* <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">Something.</p>
        
    </div> */}
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