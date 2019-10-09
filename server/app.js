import express from 'express';
import chordToTabs from './utils/tabs';
const app = express();
const port = 5000;

app.get('/tabs', (req, res) => {
  res.json(chordToTabs('C'));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
