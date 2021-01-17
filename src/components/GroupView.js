import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, CircularProgress, Container, Typography, Button } from '@material-ui/core';
import Friend from './Friend';
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
}));

function GroupView(props) {
	const classes = useStyles();
	// const history = useHistory();
	const [loading, setLoading] = useState(true);
	const [friends, setFriends] = useState([
		{ id: '3mM0jCRehyCMfiClrtJm', name: 'Aryan Patel' },
		{ id: '3mM0jCRehyCMfiClrtJm', name: 'Aniket Kabra' },
		{ id: '3mM0jCRehyCMfiClrtJm', name: 'Andrea Miranda' },
	]);

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
				<Paper elevation={0} className={classes.paper}>
					<Typography variant="subtitle1" align="center" className={classes.type}>
						Group Members
					</Typography>
					{friends.map((friend, key) => {
						return <Friend friend={friend} key={key}></Friend>;
					})}
				</Paper>
			)}
		</Container>
	);
}
export default GroupView;
