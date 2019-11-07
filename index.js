const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const { Article } = require('./db');

// const articles = [{title: 'Aneel'}, {title: 'Maria'}, {title: 'Soda'}];

app.set('port', process.env.PORT || 3000);

// supports request bodies encoded as JSON
app.use(bodyParser.json());
// supports form encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.get('/articles', (req, res, next) => {
  Article.all((err, articles) => {
    if (err) return next(err);

    res.send(articles);
  });
});

app.post('/articles', (req, res) => {
  console.log('body', req.body);
  const article = { title: req.body.title };
  articles.push(article);

  res.send(article);
});

app.get('/article/:id', (req, res) => {
  const id = req.params.id;

  Article.find(id, (err, article) => {
    if (err) return next(err);

    res.send(article);
  });
});

app.delete('/article/:id', (req, res) => {
  const id = req.params.id;

  Article.delete(id, (err) => {
    if (err) return next(err);

    res.send({ message: 'Deleted' });
  });
});

app.listen(app.get('port'), () => {
  console.log(`Express app available at localhost:${app.get('port')}`);
});

module.exports = app;