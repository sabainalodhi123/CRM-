const express = require('express');
const app = express();
const twilio = require('twilio');

const accountSid = 'AC7ab97ae269b4f70eb618361424c55c76';
const authToken = '3f6232fa651b32e8384641f4dca43da8';
const client = new twilio(accountSid, authToken);

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.post('/make-call', (req, res) => {
  const { from, to } = req.body;
  client.calls
    .create({
      from,
      to,
      url: 'http://demo.twilio.com/docs/voice.xml',
    })
    .then((call) => {
      res.send(`Call made successfully! Call SID: ${call.sid}`);
    })
    .done();
});

app.listen(8100, () => {
  console.log('Server listening on port 8100');
});