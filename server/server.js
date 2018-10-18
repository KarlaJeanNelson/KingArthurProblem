const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const logic = require('./modules/logic.module')

// Set NODE_ENV to dev unless otherwise specified
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// Use port 3000 if PORT is not specified
const PORT = process.env.PORT || '3000';

// Tell express which files to use
app.use(express.static('server/public'));

// Set up body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Start listening
app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`)
	// console.log(process.env);
});