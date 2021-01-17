import React, { Component } from 'react';
import { firebaseAppAuth, providers, db } from '../firebase';
const AuthContext = React.createContext();
const usersRef = db.collection('users');
class AuthProvider extends Component {
	mounted = false;
	unsubscribe = null;
	constructor(props) {
		super(props);
		this.state = {
			user: null,
			authenticated: false,
		};
	}

	componentDidMount() {
		this.mounted = true;
		this.unsubscribe = firebaseAppAuth.onAuthStateChanged((user) => {
			if (this.mounted) {
				if (user) {
					this.setState({
						authenticated: true,
						user,
					});
				} else {
					this.setState({
						authenticated: false,
						user: null,
					});
				}
			}
		});
	}

	componentWillUnmount() {
		this.mounted = false;
		this.unsubscribe && this.unsubscribe();
	}

	logIn = async () => {
		return await firebaseAppAuth
			.signInWithPopup(providers.googleProvider)
			.then((data) => {
				console.log(data);
				// this.checkExistsInDatabase(data.user.email);
				const user = data.additionalUserInfo.profile;
				console.log(user);
				if (data.additionalUserInfo.isNewUser) {
					console.log('new user');
					this.createUserDocument({
						email: user.email,
						firstName: user.given_name,
						lastName: user.family_name,
					});
					return { firstLogin: true };
				} else {
					console.log('existing user');
					return { firstLogin: false };
				}
			})
			.catch((error) => {
				throw new Error(`We can't sign you in! Reason -> ${error.message}, Code -> ${error.code}`);
			});
	};

	logOut = async () => {
		return firebaseAppAuth.signOut().catch((error) => {
			throw new Error(`We can't end your session!  Reason -> ${error.message}, Code -> ${error.code}`);
		});
	};

	createUserDocument = async (user) => {
		return await usersRef.add(user);
	};

	render() {
		return (
			<AuthContext.Provider
				value={{
					...this.state,
					logIn: this.logIn,
					logOut: this.logOut,
				}}
			>
				{this.props.children}
			</AuthContext.Provider>
		);
	}
}

export const Consumer = AuthContext.Consumer;
export const Provider = AuthProvider;
