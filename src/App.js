import React from "react";
import "./style.css";
import Wrapper from "./components/Wrapper";
import Display from "./components/Display";
import data from "../../data.json";

function App(props) {

  let styles= {
  myback: {
    backgroundImage: `url(images/background_texture2.jpg)`,
    backgroundColor: 'red'
  }
}


let chars=["bambam","barney","betty","boss","dino","dude","fred","gary","pebbles","pebbles2","perry","wilma"];
let availableChars = chars.slice(0);
let newchars = [];
function randomize_names() {
  for (let i = 0; i < chars.length; i++) {
      let randomChoice = Math.floor(Math.random() * chars.length);

      // Make sure the random choice is available to choose
      while (!availableChars.includes(chars[randomChoice])) {
        randomChoice = Math.floor(Math.random() * chars.length);
      }

      let choiceIndex = availableChars.indexOf(chars[randomChoice])
      availableChars.splice(choiceIndex,1);
      newchars.push(chars[randomChoice]);
    }
}

randomize_names();


  return (
    <div className="App">
      <div className="bigInstructions" style={styles.myback}>
        <h1>Clicky Game!</h1>
        <h2>Click on an image to earn points, but don't click on any more than once!</h2>
      </div>
      <Wrapper>
         <Display chars={newchars} />
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