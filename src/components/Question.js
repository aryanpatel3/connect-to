import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Container, Typography, FormControl, RadioGroup, Radio, FormControlLabel } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {},
	radioGroup: {
		flexDirection: 'row',
		padding: '3px 5px',
	},
	paper: {
		boxShadow: '0 4px 5px rgba(0,0,0,0.56)',
		padding: 10,
		margin: '50px auto',
		width: 'max-content',
		display: 'flex',
		justifyContent: 'center',
	},
	paperOdd: {
		boxShadow: '0 4px 5px rgba(0,0,0,0.56)',
		padding: 10,
		margin: '50px auto',
		width: 'max-content',
		display: 'flex',
		justifyContent: 'center',
		backgroundColor: 'darkturquoise',
	},
	type: {
		padding: 2,
	},
	typeOdd: {
		padding: 2,
		color: 'white',
	},
}));

function Question(props) {
	const classes = useStyles();

	return (
		<Container className={classes.root}>
			<Paper elevation={3} className={props.index % 2 === 0 ? classes.paper : classes.paperOdd}>
				<FormControl component="div">
					<Typography
						variant="h5"
						align="center"
						className={props.index % 2 === 0 ? classes.type : classes.typeOdd}
					>
						{props.question}
					</Typography>
					<RadioGroup
						className={classes.radioGroup}
						aria-label="personality"
						name="Personality test"
						value={props.answer}
						onChange={(e) => props.handleChange(e.target.value, props.index)}
					>
						<FormControlLabel value="1" control={<Radio color="primary" />} label="Strongly Disagree" />
						<FormControlLabel value="2" control={<Radio color="primary" />} label="Disagree" />
						<FormControlLabel value="3" control={<Radio color="primary" />} label="Neutral" />
						<FormControlLabel value="4" control={<Radio color="primary" />} label="Agree" />
						<FormControlLabel value="5" control={<Radio color="primary" />} label="Strongly Agree" />
					</RadioGroup>
				</FormControl>
			</Paper>
		</Container>
	);
}
export default Question;
