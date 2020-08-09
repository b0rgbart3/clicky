import React from "react";
import "./style.css";
import Wrapper from "./components/Wrapper";
import Display from "./components/Display";

let data=["1","2","3","4","5","6","7","8","9"];

function App(props) {

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Wrapper>
         <Display data={data} />
      </Wrapper>
    </div>
  );
}

export default App;


{/* <Card name="Bart" /> */}