import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Shared.css';
import Lifting from './Lifting';import Forms from './Forms';import Lists from './Lists';import Conditional from './Conditional';import Events from './Events';import Extracting from './Extracting';import Rendering from './Rendering';import Expressions from './Expressions';import Recommended from './Recommended';import Create from './Create';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
				</header>

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

				<h1>My Notes Newest to Oldest</h1>

				<Lifting />

				<Forms />

				<Lists />

				<Conditional />

				<Events />

				<Extracting />

				<Rendering />

				<Expressions />

				<Recommended />

				<Create />

      </div>
    );
	}
}

export default App;
