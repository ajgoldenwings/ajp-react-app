import React, { Component } from 'react';
import './Shared.css';

class Expressions extends Component {
	constructor() {
    super();
		this.user = {
			firstName: 'Harper',
			lastName: 'Perez'
		};
		this.greeting = this.getGreeting(this.user);
	}
	formatName(user) {
		return user ? user.firstName+' '+user.lastName : 'Stranger';
	}
  getGreeting(user) {
		const element = React.createElement(
			'div', {className: 'greeting'},
			React.createElement('em', {},'Hello, ' + this.formatName(user) + '!'),
			React.createElement('p', {},'Good to see you here.')
		);
		return element;
	}
  render() {
    return (
      <div>
				<h2>Embedding Expressions in JSX</h2>
				{this.greeting}
      </div>
    );
  }
}

export default Expressions;
