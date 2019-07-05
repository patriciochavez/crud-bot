const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

//connection to database
mongoose.connect('mongodb://localhost/crud-bot')
.then(db => console.log('db connected'))
.catch(err => console.log(err));
