const functions = require('firebase-functions');
const cors = require('cors')({ origin: true });

const { google } = require('googleapis');

const ml = google.ml('v1');

// const admin = require('firebase-admin');
// admin.initializeApp();
// const db = admin.firestore();

const request = require('request');

const headers = {
	'Content-Type': 'application/json',
	Authorization:
		'Bearer ya29.a0AfH6SMBDQUJ1oEis3vnuFWlS-bTyQciJdcX_5GVr2UHoKdUxMzHJrS5GDJVoBDzGWPR_FlZnfmwlKMMJnz_I5ke6z1MF1tKuQZWV9vTcEQRTh2A0qI6bP5yDa5AOJn7eSp21FkIhMRR1YQ1U2pcfs40ix6h6VNT3C9tdPLwlIn0PvFrUQWr1',
};
// "Request had invalid authentication credentials. Expected OAuth 2 access token, login cookie or other valid authentication credential. See https://developers.google.com/identity/sign-in/web/devconsole-project."
exports.predictPersonalityGroup = functions.https.onRequest(async (req, res) => {
	cors(req, res, () => {
		const instances = req.body.instances;
		// const model = 'PersonalityDev';
		console.log('initiating model prediciton');
		console.log(instances);
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
		const dataString = JSON.stringify({ instances: instances });
		console.log(dataString);

		const options = {
			url: 'https://us-central1-ml.googleapis.com/v1/projects/connect-to-d2e1e/models/PersonalityDev:predict',
			method: 'POST',
			headers: headers,
			body: dataString,
		};

		request(options, function (error, response, body) {
			if (!error && response.statusCode === 200) {
				res.send(body);
			}
			res.send(body);
		});
	});
});
