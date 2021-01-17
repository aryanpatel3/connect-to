const functions = require('firebase-functions');
const cors = require('cors')({ origin: true });

const { google } = require('googleapis');

const ml = google.ml('v1');

// const admin = require('firebase-admin');
// admin.initializeApp();
// const db = admin.firestore();

var request = require('request');

var headers = {
	'Content-Type': 'application/json',
	Authorization:
		'Bearer ya29.a0AfH6SMAySiXfxxYOqiRXCVfFAlo55Q73txIctO1McGH4G_y1tVyNZRxFrGTJEHL2x-uUNlYvR9UcZzKbBiNj8-O4p4XJIokxCULd2kPSCw8bC9nzscqC6y8sq1hhJU4Y7Isnz75BKD163VT90y_dWqC9xCUMT0zxxk7hMYxAn9xehrOLmok',
};

exports.predictPersonalityGroup = functions.https.onRequest(async (req, res) => {
	const instances = req.body.instances;
	// const model = 'PersonalityDev';
	// console.log('initiating model prediciton');
	// const { credential } = await google.auth.getApplicationDefault();
	// const modelName = `projects/connect-to-d2e1e/models/PersonalityDev`;
	// // projects/your-project-id/models/your-model-name
	// console.log(credential);
	// console.log(ml.projects);
	// const preds = await ml.projects.predict({
	// 	auth: credential,
	// 	name: modelName,
	// 	requestBody: {
	// 		instances,
	// 	},
	// });

	// console.log('hello');
	console.log(instances);
	var dataString = JSON.stringify({ instances: instances });
	console.log(dataString);

	var options = {
		url: 'https://us-central1-ml.googleapis.com/v1/projects/connect-to-d2e1e/models/PersonalityDev:predict',
		method: 'POST',
		headers: headers,
		body: dataString,
	};

	request(options, function (error, response, body) {
		if (!error && response.statusCode === 200) {
			res.send(body);
		}
		res.send({ message: error });
	});
});
