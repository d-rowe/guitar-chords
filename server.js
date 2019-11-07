const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Connected to chord database'))
  .catch(err => console.log(err));

const chordRouter = require('./routes/chords');

app.use('/chords', chordRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
