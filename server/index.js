import express from 'express';

const app = express();

const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send('Hello');
})

app.listen(PORT, err => {
  if (err) {
    return console.error(err)
  }

  console.log(`App listen to ${PORT}`)
})