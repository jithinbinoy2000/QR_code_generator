const express = require('express');
const controller = require('./controller')
const routes = express.Router();
routes.post('/generateqr',controller.qrcode)
module.exports = routes;