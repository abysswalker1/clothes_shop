import app from './app';

const config = require('config');

const port = config.get('port') || 5000;

app.listen(port);