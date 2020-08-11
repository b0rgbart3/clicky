import React from "react";
import "./style.css";
import Card from "../Card";
import { Component } from "react";
import data from "../../data.json";
import { render } from "@testing-library/react";

// make a duplicate of the array
let availableData = data.slice(0);
let newchars = [];
let score = 0;
let topscore = 0;
let sequence = [];
let randomSequence = [];

class Game extends Component {
  state = {
    data: data,
    sequence: sequence,
    score: score,
    topscore: topscore
  };

  componentDidMount() {
    this.chooseNextOrder();
  }

clicked(dataObject) {


console.log(dataObject);

  }

chooseNextOrder() {
  // build up a randomSequence of unique #s
  randomSequence = [];

  // loop through the data -- because this is how many
  // random indexes we need -- to build an array of random #s
 // data.map( () => {

    //   // Choose a random index
    //   let randomChoice = Math.floor(Math.random() * data.length);
      
    //   // Until we have a unique one, keep choosing another random #
    //   while (!randomSequence.includes(randomChoice)) {
    //     randomChoice = Math.floor(Math.random() * data.length);
    //    }
    //   // Once we have a new random #, we can add it to our array
    //    randomSequence.push(randomChoice);
    // })
}

render() {
  return <div className="wrapper">
       {/* Pass the data array and the new random sequence to the Display */}
  
       {data.map( (char ,i) => {
          console.log(char);
            return <Card dataObject={char} key={ i } clickr={this.clicked}
         />}
          ) }
      
       <header className="App-header">
        <div className="logotype">Clicky Game</div>
        <div className="instructions">Click an image to begin!</div>
        <div className="score">Score: { score }  |   Top Score: { topscore }</div>
      </header>
  </div>;
}
}

export default Game;
