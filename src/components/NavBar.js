import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, IconButton } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import Grow from '@material-ui/core/Grow';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';
import Auth from '../core';

const styles = {
	root: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		height: '90vh',
		color: '#000',
		fontFamily: 'Roboto Slab',
	},
	navbar: {
		background: 'transparent',
		fontFamily: 'Roboto Slab',
		color: 'rgb(0,0,0)',
		fontSize: '0.8rem',
	},
	navbarTitle: {
		flexGrow: '1',
	},
	navbarContainer: {
		width: '90%',
		margin: '0 auto',
	},
	content: {
		width: '60%',
		textAlign: 'center',
		fontSize: '1.5rem',
	},
	moveDown: {
		color: 'rgb(0,0,0)',
		fontSize: '3rem',
	},
};

class NavBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			checked: true,
		};
	}

	handleLogin = (context) => {
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
	};

	render() {
		const { checked } = this.state;
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				<AppBar className={classes.navbar} elevation={0}>
					<Toolbar className={classes.navbarContainer}>
						<h1 className={classes.navbarTitle}>Connect2</h1>
						<div className={classes.alignRight}>
							<Auth.Consumer>
								{(context) => {
									return (
										<div>
											<Button
												color="inherit"
												onClick={() => {
													this.handleLogin(context);
												}}
											>
												Login
											</Button>
											<Button
												color="inherit"
												onClick={() => {
													this.handleLogin(context);
												}}
											>
												Sign Up
											</Button>
										</div>
									);
								}}
							</Auth.Consumer>
						</div>
					</Toolbar>
				</AppBar>
				<Grow in={checked} {...(checked ? { timeout: 1000 } : {})}>
					<div className={classes.content}>
						<h1>Welcome to</h1>
						<h1 className={classes.noTopMargin}>Connect2</h1>
						<IconButton>
							<KeyboardArrowDownIcon className={classes.moveDown} />
						</IconButton>
					</div>
				</Grow>
			</div>
		);
	}
}

export default withRouter(withStyles(styles)(NavBar));
