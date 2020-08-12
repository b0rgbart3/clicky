
import "./style.css";
import Card from "../Card";
import { Component } from "react";
import data from "../../data.json";
import { render } from "@testing-library/react";
import React, { useState, useEffect } from "react";
import Shake from 'react-reveal/Shake';

// make a duplicate of the array
let availableData = data.slice(0);
let newchars = [];
let score = 0;
let topscore = 0;
let sequence = [];
let randomSequence = [];
const originalData = [...data];

class Game extends Component {

  state = {
    data: data,
    sequence: sequence,
    score: score,
    topscore: topscore,
    success: "not_yet",
    instruction: "Click an image to begin!"
  };


  componentDidMount() {
    this.chooseNextOrder();
  }

clicked = id => {

    let dataObject = this.state.data[id-1];
 
    let newDataObject = [ dataObject ][0];
    if (!dataObject.clicked) { 
      newDataObject.clicked = true;
      console.log(newDataObject);
      this.state.score++;
      console.log("Score: " + this.state.score);
      this.state.success = "yes";
      console.log("ID: " + dataObject.id);
      this.state.data[dataObject.id-1] = newDataObject;
      console.log(this.state.data);
      this.state.instruction = "You guessed correctly!";
      //console.log("Changing this to clicked: " + JSON.stringify(dataObject));
    } else {
      if (this.state.score > this.state.topscore) {
        console.log("Setting top score to : "+ this.state.score);
        this.state.topscore = this.state.score;
     }
      this.state.score = 0;
      this.state.success = "no";
      this.state.instruction = "You guessed incorrectly!";
      
      let timer = setTimeout( () => { this.state.success="neutral";
      this.setState({success: this.state.success});
     } , 2000);
      

      // reset all of the objects back to clicked = false
      this.state.data.map( objectData => {
        objectData.clicked = false;
      })
     
    }

    this.setState({ data: this.state.data, score: this.state.score,
    success: this.state.success, topscore: this.state.topscore });
     console.log(this.state.data);

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
  

       <Shake when={this.state.success==="no"}>
         <div>
       {data.map( (char ,i) => {
        //  console.log(char);
            return <Card dataObject={char} key={i} id={ char.id } 
            clickr={this.clicked} />
        }
          ) }
          </div>
      </Shake>
       <header className="App-header">
        <div className="logotype">Clicky Game</div>

        <div className={`instructions instructions-${this.state.success}`} 
        
        >{ this.state.instruction }</div>
        <div className="score">Score: { this.state.score }  |   Top Score: { this.state.topscore }</div>
      </header>
  </div>
}
}

export default Game;
