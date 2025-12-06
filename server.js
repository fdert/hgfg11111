const express = require('express');
const cors = require('cors');
const config = require('./config');

const qrRoute = require('./routes/qr');
const sendRoute = require('./routes/send');
const sessionsRoute = require('./routes/sessions');

async function start(){
  const app = express();
  app.use(cors());
  app.use(express.json());

  app.use('/qr', qrRoute);
  app.use('/send', sendRoute);
  app.use('/sessions', sessionsRoute);

  app.get('/status', (req,res)=>res.json({ ok:true, sessions: Object.keys(global.sessions||{}) }));

  app.listen(config.port, ()=> console.log('Primo backend listening on', config.port));
}

start();
