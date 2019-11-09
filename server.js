const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV === 'PROD') {
  app.use(express.static(path.join(__dirname, 'client/build')));
  // app.use(express.static('./client/build')); //Serves resources from public folder
}

const uri = process.env.ATLAS_URI;
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Connected to chord database'))
  .catch(err => console.log(err));

// Route chords
const chordRouter = require('./routes/chords');
app.use('/chords', chordRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
