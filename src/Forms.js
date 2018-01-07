import React, { Component } from 'react';
import './Shared.css';

class Forms extends Component {
	constructor(props) {
    super(props);
    this.state = {value: ''};
    this.state = {
      value: '',
      valueTextarea: 'Please write an essay about your favorite DOM element.',
			valueSelect: 'coconut',
			isGoing: true,
      numberOfGuests: 2
    };

    this.handleChange = this.handleChange.bind(this);
		this.handleChangeTextarea = this.handleChangeTextarea.bind(this);
    this.handleChangeSelect = this.handleChangeSelect.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
		this.setState({value: event.target.value.toUpperCase()});
  }

  handleChangeTextarea(event) {
    this.setState({valueTextarea: event.target.value});
  }

  handleChangeSelect(event) {
    this.setState({valueSelect: event.target.value});
	}

	handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
	}

	render() {
    return (
      <div>
				<h2>Forms</h2>
				<form onSubmit={this.handleSubmit}>
					<label>
						Name:
						<input type="text" value={this.state.value} onChange={this.handleChange} />
					</label>
					<br/>
					<label>
						Essay:
						<textarea value={this.state.valueTextarea} onChange={this.handleChangeTextarea} />
					</label>
					<br/>
					<label>
						Pick your favorite La Croix flavor:
						<select value={this.state.valueSelect} onChange={this.handleChangeSelect}>
							<option value="grapefruit">Grapefruit</option>
							<option value="lime">Lime</option>
							<option value="coconut">Coconut</option>
							<option value="mango">Mango</option>
						</select>
					</label>
					<br/>
					<input type="submit" value="Submit" />
					<br/>
					<label>
						Is going:
						<input
							name="isGoing"
							type="checkbox"
							checked={this.state.isGoing}
							onChange={this.handleInputChange} />
					</label>
					<br />
					<label>
						Number of guests:
						<input
							name="numberOfGuests"
							type="number"
							value={this.state.numberOfGuests}
							onChange={this.handleInputChange} />
					</label>
				</form>
      </div>
    );
  }
}

export default Forms;
