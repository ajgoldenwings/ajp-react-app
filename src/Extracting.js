import React, { Component } from 'react';
import './Shared.css';

function Avatar(props) {
  return (
    <img className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}

function Comment(props) {
  return (
		<div className="Comment">
			<UserInfo user={props.author} />
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

function formatDate(date) {
  return date.toLocaleDateString();
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  );
}

class Extracting extends Component {
	constructor(props) {
		super(props);
		this.comment = {
			date: new Date(),
			text:
				'I hope you enjoy learning React!',
			author: {
				name: 'Hello Kitty',
				avatarUrl:
					'http://placekitten.com/g/64/64',
			}
		}
	}
  render() {
    return (
      <div>
				<h2>Extracting Components</h2>

				<Comment
					date={this.comment.date}
					text={this.comment.text}
					author={this.comment.author} />
      </div>
    );
  }
}

export default Extracting;
