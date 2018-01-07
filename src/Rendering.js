import React, { Component } from 'react';
import './Shared.css';

function FormattedDate(props) {
  return <p>It is {props.date.toLocaleTimeString()}.</p>;
}

class Rendering extends Component {
	constructor(props) {
    super(props);
    this.state = {date: new Date()};
	}
	componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
	}
	componentWillUnmount() {
    clearInterval(this.timerID);
	}
  tick() {
    this.setState({
      date: new Date()
    });
  }
  render() {
    return (
      <div>
        <h2>Rendered Elements, State and Lifecycle</h2>
				<p>It is {this.state.date.toLocaleTimeString()}.</p>
				<FormattedDate date={this.state.date} />
      </div>
    );
  }
}

export default Rendering;
