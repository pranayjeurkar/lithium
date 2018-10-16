const express = require('express');
const bodyParser = require('body-parser');
const app = express();
var greetings = require("./controllers/verification.js");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3008, () => console.log('Webhook server is listening, port 3000'));
const verificationController = require('./controllers/verification');
const messageWebhookController = require('./controllers/messageWebhook');
app.get('/', verificationController);

app.post('/', messageWebhookController);
app.get('/botpolicy', function(req, res) {
    res.send('below are the policies');
});