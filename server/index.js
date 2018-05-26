import express from 'express';
import { dbConfig, middlewaresConfig } from './config';

import { urlRoute } from './modules';

const app = express();

const PORT = process.env.PORT || 4000;

/*
* DATABASE
*/
'mongodb://localhost/shorturltuto'

/**
 * MIDDLEWARES
 */

middlewaresConfig(app);

app.get('/', (req, res) => {
  res.send('Hello');
});

app.use([urlRoute]);

app.listen(PORT, err => {
  if (err) {
    return console.error(err);
  }

  console.log(`App listen to ${PORT}`);
});
