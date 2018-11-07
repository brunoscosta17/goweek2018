const express = require('express');
const mongoose = require('mongoose');

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);
const cors = require('cors');

mongoose.connect(
    'mongodb://goweek:goweek1010@ds155263.mlab.com:55263/goweek2018-backend',
    {
        useNewUrlParser: true
    },
    console.log('Connected to the DB') 
);

app.use((req, res, next) => {
    req.io = io;

    return next();
});

app.use(express.json());
app.use(cors());
app.use(require('./routes'))

server.listen(3000, () => {
    console.log('Server started on port 3000');
});