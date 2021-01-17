import React from 'react';
// import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import NavBar from './NavBar';
import Connect2Info from './Connect2Info';

const useStyles = makeStyles((theme) => ({
	root: {
		maxHeight: '100vh',
		backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/devin-avery-lhAy4wmkjSk-unsplash.jpg'})`,
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
	},
}));

function Home() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<CssBaseline />
			<div>
				<NavBar />
			</div>
			<div>
				<Connect2Info />
			</div>
		</div>
	);
}
export default Home;
