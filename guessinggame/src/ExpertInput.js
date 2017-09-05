import React, { Component } from 'react';
import ButtonController from './ButtonController';


class ExpertInput extends Component {
  constructor(){
    super();
  }
  render() {
    return(
      <section className="expertAnswer">
        <label for="guessExpertAnswer">Guess a number between 1-100:</label>
        <input type="text" id="guessExpertAnswer" name="guessExpertAnswer"/>
        <label for="submitExpertAnswerBtn"></label>
        <input type="submit" id="submitExpertAnswerBtn" name="submitExpertAnswerBtn"/>
      </section>
    );
  }
}

export default ExpertInput;