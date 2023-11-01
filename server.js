'use strict';
const express = require('express');

// Configuration
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello world');
});

app.get('/health',(req,res)=> {
  res.send ("Health OK 🥳");
});

app.get('/bad-health',(req,res)=> {
  res.status(500).send('Health KO 🤒');
});

app.get('/404',(req,res) => {
  res.status(404).send('Not found');
});

app.get('/500',(req,res) => {
  res.status(500).send('Internal Server Error');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
