import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	content: {
		textAlign: 'center',
		justifyContent: 'center',
		alignItems: 'center',
		width: '90%',
		margin: '50 auto',
	},
	whiteBackground: {
		margin: '110px auto ',
		backgroundColor: '#fff',
		fontFamily: 'Roboto Slab',
		paddingBottom: '110px',
	},
}));

function Connect2Info() {
	const classes = useStyles();

	return (
		<div className={classes.whiteBackground}>
			<div className={classes.content}>
				<p>
					The website that enables you to connect with other students who have similar courses to you and have
					compatible personality types to yours
				</p>
			</div>
		</div>
	);
}

export default Connect2Info;
