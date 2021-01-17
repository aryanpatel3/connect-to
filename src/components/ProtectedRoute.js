import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Header from './Header';
import Auth from '../core';

export const ProtectedRoute = ({ component: Component, ...rest }) => {
	const loggedIn = (props) => {
		return (
			<>
				<Header />
				<div className="container">
					<Component {...props} />
				</div>
			</>
		);
	};

	const loggedOut = (props) => {
		return (
			<Redirect
				to={{
					pathName: '/',
					state: {
						from: props.location,
					},
				}}
			/>
		);
	};

	return (
		<Auth.Consumer>
			{(context) => {
				return (
					<Route
						{...rest}
						render={(props) => {
							if (context.authenticated) {
								console.log('authenticated');
								return loggedIn(props);
							} else {
								console.log('NOT authenticated');
								return loggedOut(props);
							}
						}}
					/>
				);
			}}
		</Auth.Consumer>
	);
};
