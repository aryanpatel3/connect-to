import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Paper, CircularProgress, Container, Typography, Button } from '@material-ui/core';
import GroupView from './GroupView';
import Profile from './Profile';
import Upcoming from './Upcoming';

const useStyles = makeStyles((theme) => ({
	root: {
		height: '100%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	type: {
		padding: '5px 0 0 0',
		fontFamily: 'system-ui',
		color: 'darkturquoise',
	},
	button: {
		margin: '0 0 50px 0',
	},
	center: {
		display: 'flex',
		justifyContent: 'center',
	},
	box: {
		display: 'flex',
	},
}));

function Dashboard(props) {
	const classes = useStyles();
	// const history = useHistory();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				// const res = await db.collection('friends').doc('67kBGHf5bDg45ZLm0Vs7').get();

				// let data = ['Not found'];

				// if (res.exists) {
				// 	data = res.data().friends;
				// }

				// setfriends(data);
				setLoading(false);
			} catch (err) {
				console.error(err);
			}
		};

		fetchData();
	}, []);

	return (
		<Container className={loading ? classes.root : ''}>
			{loading ? (
				<Container className={classes.root}>
					<CircularProgress />
				</Container>
			) : (
				<Box className={classes.box}>
					<GroupView></GroupView>
					<Profile></Profile>
					<Upcoming></Upcoming>
				</Box>
			)}
		</Container>
	);
}
export default Dashboard;
