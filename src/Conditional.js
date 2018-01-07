import React, { Component } from 'react';
import './Shared.css';

function LoginButton(props) {
	return (<button onClick={props.onClick}>Login</button>);
}

function LogoutButton(props) {
	return (<button onClick={props.onClick}>Logout</button>);
}

const messages = ['React', 'Re: React', 'Re:Re: React'];

function Mailbox(props) {
	const unreadMessages = props.unreadMessages;

  return (
    <div>
      <span>Hello! </span>
			{unreadMessages.length > 0 &&
				<span>You have {unreadMessages.length} unread messages.</span>
      }
    </div>
  );
}

function UserGreeting(props) {
  return <span>Welcome back!</span>;
}

function GuestGreeting(props) {
  return <span>Please sign up.</span>;
}

function Greeting(props) {
  if (props.isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return (
    <div className="warning">Warning!</div>
  );
}

class Conditional extends Component {
  constructor(props) {
		super(props);
		this.state = { isLoggedIn: false, showWarning: true };
    this.handleToggleClick = this.handleToggleClick.bind(this);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
	}

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

	handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

	handleToggleClick() {
    this.setState(prevState => ({
      showWarning: !prevState.showWarning,
      isLoggedIn: prevState.isLoggedIn
    }));
  }

	render() {
		const isLoggedIn = this.state.isLoggedIn;

    let button = null;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
		}

    return (
      <div>
				<h2>Conditional Rendering</h2>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide Warning' : 'Show Warning'}
        </button>
				<div>Is not logged in greetings (STATIC): <Greeting /></div>
				<div>Is not logged in greetings (STATIC): <Greeting isLoggedIn={false} /></div>
				<div>Is logged in greeting (STATIC): <Greeting isLoggedIn={true} /></div>
				<div>
					The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in. <Greeting isLoggedIn={isLoggedIn} />
				</div>
				<div>
					Type 1: {button}
					<br/>
					Type 2: {isLoggedIn ? (<LogoutButton onClick={this.handleLogoutClick} />)
						: (<LoginButton onClick={this.handleLoginClick} />)}
				</div>
				<div>
				</div>
				<div>
					{isLoggedIn &&
						<Mailbox unreadMessages={messages} />
					}
				</div>
      </div>
    );
  }
}

export default Conditional;
