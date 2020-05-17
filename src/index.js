const debug = require('debug')('server:debug');

import config from 'config';
import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';
import path from 'path';


const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/', routes);

const listen = app.listen(config.get('port'), () => {
    debug(`server is running on port ${config.get('port')} and in ${config.get('name')} mode`)
    console.log(`server is running on port ${config.get('port')} and in ${config.get('name')} mode`)
});

module.exports = app;
module.exports.port = listen.address().port;