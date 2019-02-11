import express from 'express';
import config from './config';

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', { name: 'Thoth' });
});

app.listen(config.port, () => {
  console.info(`Running on: ${config.port} ...yay`);
});
