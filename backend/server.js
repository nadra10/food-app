


const express = require('express');
const path = require('path');
const logger = require('morgan');
const { createRequire } = require('module');
// Always require and configure near the top
require('dotenv').config()

require("./config/db");

const app = express();

app.use(logger('dev'));
app.use(express.json());

// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder


// Put API routes here, before the "catch all" route


// Check if token and create req.user
app.use(require('./config/checkToken'));




// Protect the API routes below from anonymous users
const ensureLoggedIn = require('./config/ensureLoggedIn');




app.use('/api/auth', require('./Routes/Auth'));
// app.use('/api/auth', require('./Routes/DisplayData'));
// app.use('/api/auth', require('./Routes/OrderData'));
// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests


const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Express app is running on port: ${PORT}`)
})





























