'use strict'
/* Import dependencies */
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
/* Import keys */
const config = require('config');
/* Import routes */
const items = require('./routes/api/items');
const users = require('./routes/api/users');
const auth = require('./routes/api/auth');

/* Connect to database */
const mongoURI = config.get('mongoURI');

const app = express();

/* Boddy parser middleware */
app.use(express.json());

/* Connect ot mongoDB */
mongoose
    .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error(err));

/* Item routes */
app.use('/api/items', items);
/* User routes */
app.use('/api/users', users);
/* Auth routes */
app.use('/api/auth', auth);

/* Serve static assets if in production */
if(process.env.NODE_ENV === 'production') {
    /* Set a static folder */
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));