import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
	Paper,
	Avatar,
	Container,
	Typography,
	FormControl,
	CircularProgress,
	Radio,
	FormControlLabel,
} from '@material-ui/core';
import { firebaseAppAuth, db } from '../firebase';

const useStyles = makeStyles((theme) => ({
	root: {},
	radioGroup: {
		flexDirection: 'row',
		padding: '3px 5px',
	},
	paper: {
		padding: 10,
		display: 'flex',
		justifyContent: 'flex-start',
		flexDirection: 'column',
	},
	type: {
		padding: 2,
	},
}));

function Profile(props) {
	const classes = useStyles();
	const [profile, setProfile] = useState({ name: 'Aryan Patel', personalityGroup: 5, email: 'aryan@connect.to' });
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				// const res = await db.collection('friends').doc(firebaseAppAuth.currentUser.uid).get();

				// let data = ['Not found'];

				// if (res.exists) {
				// 	data = res.data();
				// }

				// setProfile(data);
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
					<Avatar className={classes.purple}>OP</Avatar>
					<Typography variant="subtitle2" className={classes.type}>
						{profile.name}
					</Typography>
					<Typography variant="body2" className={classes.type}>
						{`subgroup: ${profile.personalityGroup}`}
					</Typography>
					<Typography variant="body2" className={classes.type}>
						{`email: ${profile.email}`}
					</Typography>
				</Paper>
			)}
		</Container>
	);
}
export default Profile;
