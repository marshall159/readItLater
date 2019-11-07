const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const articles = [{title: 'Aneel'}, {title: 'Maria'}, {title: 'Soda'}];

app.set('port', process.env.PORT || 3000);

// supports request bodies encoded as JSON
app.use(bodyParser.json());
// supports form encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.get('/articles', (req, res) => {
  res.send(articles);
});

app.post('/articles', (req, res) => {
  console.log('body', req.body);
  const article = { title: req.body.title };
  articles.push(article);

  res.send(article);
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