// When the page loads, display a header that says Start Game and underneath that have two buttons. 

import React, { Component } from 'react';
import StandardInput from './StandardInput';
import ExpertInput from './ExpertInput';
import ButtonController from './ButtonController';
import './App.css';

const data = {
  // what data is needed in game
    "totalGuesses": 0,
    "currentNumberGuesses": 0,
    "showInput": false,
    "highscore": 0,
    "winningPlayer": ''
}



class App extends Component {
  constructor(){
    super();
    this.state = data;
  }
// handleStandardClick{
//   this.setState({
//     showInput: true,
//     display: {
//         display: 'inline-block'
//       }
//   });
// }
 


  render() {
    return (
      <div className="App">
        <h1>Start Game</h1>
        <section className="buttons">
          <ButtonController 

          />
        </section>
        <StandardInput />
        <ExpertInput />
      </div>
    );
  }
}

export default App;
