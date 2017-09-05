// One button should read Standard and the other should read Expert. 
// If the user clicks Standard, randomly generate a number between 1 and 10 for the user to guess. 
// Expert should be between 1 and 100. 
// Once either of these buttons is clicked, the game starts.
// There should be an input for the user to guess a number and submit.

import React, { Component } from 'react';

class ButtonController extends Component{
	render() {
		return(
			<section className="buttons">
	      <button className="standardbtn" onClick={this.props.handleStandardClick}>Standard</button>
	  		<button className="expertbtn" onClick={this.props.ShowHide}>Expert</button>
			</section>
		); 
	}
}


export default ButtonController;