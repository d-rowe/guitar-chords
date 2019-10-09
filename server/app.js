import express from 'express';
import chordToTabs from './utils/tabs';
const app = express();
const port = 5000;

app.get('/tabs', (req, res) => {
  const chord = req.query.chord;
  const response = chordToTabs(chord);
  console.log(`Request for ${chord}`);
  res.json(response);
});

app.listen(port);
