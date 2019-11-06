const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000);

const articles = [{title: 'Aneel'}, {title: 'Maria'}, {title: 'Soda'}];

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.get('/articles', (req, res) => {
  res.send(articles);
});

app.post('/articles', (req, res) => {
  res.send('OK');
});

app.get('/article/:id', (req, res) => {
  const id = req.params.id;
  console.log(`Fetching: ${id}`);

  res.send(articles[id]);
});

app.delete('/article/:id', (req, res) => {
  const id = req.params.id;
  console.log(`Deleting: ${id}`);
  delete articles[id];

  res.send({ message: 'Deleted' });
});

app.listen(app.get('port'), () => {
  console.log(`Express app available at localhost:${app.get('port')}`);
});

module.exports = app;