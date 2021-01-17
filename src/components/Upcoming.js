import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, CircularProgress, Link, Container, Typography, Button } from '@material-ui/core';
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
	paper: {
		display: 'flex',
		flexDirection: 'column',
	},
}));

function Upcoming(props) {
	const classes = useStyles();
	// const history = useHistory();
	const [loading, setLoading] = useState(true);
	const [events, setEvents] = useState([
		'https://zoom.ca//gettoknowpeople.com',
		'https://yo.ca//gettoknowpeople.com',
	]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				// const res = await db.collection('events').doc('67kBGHf5bDg45ZLm0Vs7').get();

				// let data = ['Not found'];

				// if (res.exists) {
				// 	data = res.data().events;
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
						Upcoming meetings
					</Typography>
					{events.map((event, key) => {
						return <Link key={key}>{event}</Link>;
					})}
				</Paper>
			)}
		</Container>
	);
}
export default Upcoming;
