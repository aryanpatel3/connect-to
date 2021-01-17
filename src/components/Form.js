import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CircularProgress, Container, Typography, Button } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import Question from './Question';
import { db, firebaseAppAuth } from '../firebase';
import axios from 'axios';
import Auth from '../core';
// import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	root: {
		height: '100%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	type: {
		padding: '20px 0 0 0',
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

function Form(props) {
	const classes = useStyles();
	// const history = useHistory();
	const [loading, setLoading] = useState(true);
	const [questions, setQuestions] = useState([]);
	const [answers, setAnswers] = useState(new Array(50).fill(5));

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await db.collection('questions').doc('67kBGHf5bDg45ZLm0Vs7').get();

				let data = ['Not found'];

				if (res.exists) {
					data = res.data().questions;
				}

				setQuestions(data);
				setLoading(false);
			} catch (err) {
				console.error(err);
			}
		};

		fetchData();
	}, []);

	const onSubmit = (context) => {
		// const { history } = this.props;
		setLoading(true);
		console.log('submit');
		console.log(context);
		const axiosInstance = axios.create({
			baseURL: 'http://localhost:5000/connect-to-d2e1e/us-central1',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
				// Authorization: `Bearer TOEKN FOES HERER`,
			},
		});
		const arrOfAnswers = [answers];
		console.log(arrOfAnswers);
		axiosInstance
			.post('/predictPersonalityGroup', { instances: arrOfAnswers })
			.then(async function (data) {
				console.log(data);
				const group = data.data.predictions[0];
				console.log(group);
				console.log('success');
				console.log(firebaseAppAuth.currentUser.email);
				await db
					.collection('users')
					.where('email', '==', firebaseAppAuth.currentUser.email)
					.get()
					.then((snap) =>
						snap.forEach((doc) => {
							doc.ref.update({ personalityGroup: group });
						}),
					);
			})
			.catch(function (err) {
				console.log(err);
			});
		props.history.push('/app/dashboard');
	};

	const handleChange = (answer, index) => {
		let newArr = [...answers];
		newArr[index] = answer;
		setAnswers(newArr);
	};

	return (
		<Container className={loading ? classes.root : ''}>
			{loading ? (
				<Container className={classes.root}>
					<CircularProgress />
				</Container>
			) : (
				<div>
					<Typography variant="h3" align="center" className={classes.type}>
						Fill out this form to get matched!
					</Typography>
					{questions.map((question, key) => {
						return (
							<Question
								handleChange={handleChange}
								question={question}
								key={key}
								index={key}
								answer={answers[key]}
							></Question>
						);
					})}
					<div className={classes.center}>
						<Auth.Consumer>
							{(context) => {
								return (
									<Button
										variant="contained"
										color="primary"
										className={classes.button}
										endIcon={<SendIcon />}
										onClick={() => onSubmit(context)}
									>
										Submit
									</Button>
								);
							}}
						</Auth.Consumer>
					</div>
				</div>
			)}
		</Container>
	);
}
export default Form;
