const express = require('express');
const logger = require('morgan');

require('dotenv').config();
require('./config/database');

const app = express();
app.use(express.json());
app.use(logger('dev'));

app.use('/users', require('./routes/users'));
app.use('/', require('./routes/wishlists'));
app.use('/', require('./routes/wishes'));

app.listen(3001, () => console.log('express listening from port 3001 ...'));
