const http = require('http');

const express = require('express')

const app = express();

const adminRoutes = require('./routes/admin')

app.use('/admin', adminRoutes);

const server = http.createServer(app);

server.listen(5000)