import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
	Paper,
	Avatar,
	Container,
	Typography,
	FormControl,
	RadioGroup,
	Radio,
	FormControlLabel,
} from '@material-ui/core';

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
	},
	type: {
		padding: 2,
	},
}));

function Friend(props) {
	const classes = useStyles();
	const friend = props.friend;

	return (
		<Paper elevation={0} className={classes.paper}>
			<Avatar className={classes.purple}>OP</Avatar>
			<Typography variant="subtitle2" align="center" className={classes.type}>
				{friend.name}
			</Typography>
		</Paper>
	);
}
export default Friend;
