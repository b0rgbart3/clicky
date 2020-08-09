import React from "react";
import "./style.css";
import Wrapper from "./components/Wrapper";
import Display from "./components/Display";
let data=["1","2","3","4","5","6","7","8","9"];
let chars=["bambam","barney","betty","boss","dino","dude","fred","gary","pebbles","pebbles2","perry","wilma"];
function App(props) {

//   let bigIBack = "/public/images/background_texture1.jpg";
  let styles= {
  myback: {
    backgroundImage: `url(images/background_texture2.jpg)`,
    backgroundColor: 'red'
  }
}

  return (
    <div className="App">
      <div className="bigInstructions" style={styles.myback}>
        <h1>Clicky Game!</h1>
        <h2>Click on an image to earn points, but don't click on any more than once!</h2>
      </div>
      <Wrapper>
         <Display data={data} chars={chars} />
      </Wrapper>
      <header className="App-header">
        <div className="logotype">Clicky Game</div>
        <div className="instructions">Click an image to begin!</div>
        <div className="score">Score: 3  |   Top Score: 4</div>
      </header>
    </div>
  );
}

export default App;