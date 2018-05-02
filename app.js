'use strict';

const express = require('express');
const path = require('path');
const app = express();
// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist'));
// Start the app by listening on the default

const port = process.env.PORT || 4200;
app.listen(port, function () {
  console.log("Nhs app is running at port " + port);
});
