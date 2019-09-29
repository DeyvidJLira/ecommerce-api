const functions = require('firebase-functions');
const express = require('express');
const app = express();
var mail = require('./mail/ecommerce');

app.use('/ecommerce/mail', mail);

exports.api = functions.https.onRequest(app);
