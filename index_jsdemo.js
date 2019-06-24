let _ = require('lodash');
let fs = require('fs');
let path = require('path');
let WebSocket = require('ws');

let wss = new WebSocket.Server({ port: 2021 });
console.log('whatsapp-web-reveng jsdemo server listening on port 2021');

wss.on('connection', function(ws, req) {
  console.log('inside coonection');
  let whatsapp = new WebSocket('wss://web.whatsapp.com/ws', {
    headers: { Origin: 'https://web.whatsapp.com' }
  });

  ws.onmessage = function(e) {
    whatsapp.send(e.data);
  };
  ws.onclose = function(e) {
    whatsapp.close();
  };
  whatsapp.onopen = function(e) {
    console.log('open');
    ws.send('whatsapp_open');
  };
  whatsapp.onmessage = function(e) {
    ws.send(e.data);
  };
  whatsapp.onclose = function(e) {
    ws.close();
  };
  whatsapp.onerror = function(e) {
    console.log('connection error: ' + e);
  };
});

wss.on('error', err => {
  console.log('err: ', err);
});
