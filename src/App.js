import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

// context
import Auth from './core';

// local components
import { ProtectedRoute } from './components/ProtectedRoute';
import Dashboard from './components/Dashboard';
import Form from './components/Form';
import Home from './components/Home';
class App extends React.Component {
	render() {
		return (
			<Auth.Provider>
				<BrowserRouter>
					<Switch>
						{/* <Route exact path="/log-in" component={LogIn} /> */}
						<Route exact path="/home" component={Home} />
						<Route exact path="/personality-test" component={Form} />
						<ProtectedRoute exact path="/app/dashboard" component={Dashboard} />

						<Route
							component={() => {
								return <Redirect to="/home" />;
							}}
						/>
					</Switch>
				</BrowserRouter>
			</Auth.Provider>
		);
	}
}

export default App;
