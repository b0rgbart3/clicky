import React from "react";
import "./style.css";
import Game from "./components/Game";

function App(props) {

//   let bigIBack = "/public/images/background_texture1.jpg";
  let styles= {
  myback: {
    backgroundImage: `url(images/background_texture2.jpg)`,
    backgroundColor: 'black'
  }
}


  return (
    <div className="App">
      <div className="bigInstructions" style={styles.myback}>
        <h1>Clicky Game!</h1>
        <h2>Click on an image to earn points, but don't click on any more than once!</h2>
      </div>
      <Game>
      </Game>

    </div>
  );
}

export default App;