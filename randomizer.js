let cardObjects = [ { id: 0, charIndex: 0},
    { id: 1, charIndex: 1},
    { id: 2, charIndex: 2},
    { id: 3, charIndex: 3},
    { id: 4, charIndex: 4},
    { id: 5, charIndex: 5},
    { id: 6, charIndex: 6},
    { id: 7, charIndex: 7},
    { id: 8, charIndex: 8},
    { id: 9, charIndex: 9},
    { id: 10, charIndex: 10},
    { id: 11, charIndex: 11},
  ];
  let chars=["bambam","barney","betty","boss","dino","dude","fred","gary","pebbles","pebbles2","perry","wilma"];

  let names = [];
  
  function randomize() {
    let choices = [0,1,2,3,4,5,6,7,8,9,10,11];  
    
    for (let i = 0; i < 12; i++) {
          let randomChoice = Math.floor(Math.random() * 12);
  
          // Make sure the random choice is available to choose
          while (!choices.includes(randomChoice)) {
            randomChoice = Math.floor(Math.random() * 12);
          }
          choiceIndex = choices.indexOf(randomChoice)
          choices.splice(choiceIndex,1);
          cardObjects[i].charIndex = randomChoice;
  
        }
    console.log(cardObjects);
    }
   
    
  
  //randomize();

  
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

        choiceIndex = availableChars.indexOf(chars[randomChoice])
        availableChars.splice(choiceIndex,1);
        newchars.push(chars[randomChoice]);
      }
  }

  randomize_names();
