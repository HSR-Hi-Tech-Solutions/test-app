const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');

require('dotenv').config();

const mongoUrl = process.env.HSR_DATABASE;
mongoose.connect(mongoUrl);

const database = mongoose.connection;

database.on('error', (error)=>{
    console.log(error);
})

database.once('connected', ()=>{
    console.log('Database Connection is successful!');
})

const app  = express();

app.use(express.json());
app.use('/api/v1/', routes);

app.listen(3000, ()=>{
    console.log('Server Started at 3000');
})