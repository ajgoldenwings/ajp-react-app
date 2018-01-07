import React, { Component } from 'react';
import './Shared.css';

class Events extends Component {
	constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }
	activateLasers() {
		alert('Laser Activated!');
	}
	handleClick(e) {
    // e.preventDefault();  // Let's stop this event.
		this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }
  render() {
    return (
      <div>
				<h2>Handling Events</h2>
				<button onClick={this.handleClick}>
					{this.state.isToggleOn ? 'Activate' : 'Inactivate'} Lasers
				</button>
				<br/>
				<a onClick={this.handleClick}>
					Click me
				</a>
				<br/>
				<br/>
				<div>{this.state.isToggleOn ? 'Waiting...' : 'Lasers! Pew. Pew. Pew.'}</div>
      </div>
    );
  }
}

export default Events;
