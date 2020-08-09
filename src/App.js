import React from "react";
import "./style.css";
import Wrapper from "./components/Wrapper";
import Display from "./components/Display";
let data=["1","2","3","4","5","6","7","8","9"];
let chars=["bambam","barney","betty","boss","dino","dude","fred","gary","pebbles","pebbles2","perry","wilma"];
function App(props) {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Wrapper>
         <Display data={data} chars={chars} />
      </Wrapper>
    </div>
  );
}

export default App;