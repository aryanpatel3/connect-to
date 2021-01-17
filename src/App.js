import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

// context
import Auth from './core';

// local components
import { LogIn } from './components/LogIn';
import { ProtectedRoute } from './components/ProtectedRoute';
import { Dashboard } from './components/Dashboard';
import { Form } from './components/Form';
class App extends React.Component {
	render() {
		return (
			<Auth.Provider>
				<BrowserRouter>
					<Switch>
						<Route exact path="/log-in" component={LogIn} />
						<ProtectedRoute exact path="/app/dashboard" component={Dashboard} />
						<Route exact path="/personality-test" component={Form} />

						<Route
							component={() => {
								return <Redirect to="/log-in" />;
							}}
						/>
					</Switch>
				</BrowserRouter>
			</Auth.Provider>
		);
	}
}

export default App;
