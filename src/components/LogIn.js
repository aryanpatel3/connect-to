import React from 'react';
import { Redirect } from 'react-router-dom';

// local styles
import '../styles/LogIn.css';

// context
import Auth from '../core';

export class LogIn extends React.Component {
	loggedOut = (context) => {
		return (
			<div className="LogIn">
				<h1>Welcome</h1>
				<button
					className="btn btn-primary"
					onClick={() => {
						context.logIn().then((res) => {
							console.log(res);
							if (res.firstLogin) {
								console.log('first login yay');
								this.props.history.push('/personality-test');
							} else {
								console.log('returning user yay');
								this.props.history.push('/app/dashboard');
							}
						});
					}}
				>
					LogIn
				</button>
			</div>
		);
	};

	// when the user is logged in don't show the log-in page, redirect to dashboard
	// @TODO -> find a way to use goBack() function
	loggedIn = () => {
		return <Redirect to="/app/dashboard" />;
	};

	render() {
		return (
			<Auth.Consumer>
				{(context) => {
					return context.authenticated ? this.loggedIn() : this.loggedOut(context);
				}}
			</Auth.Consumer>
		);
	}
}
