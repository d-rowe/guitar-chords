# chordBank

Tools for batch formatting and importing of chords

## format.js

Tool for batch formatting chords downloaded from [chords-db]( https://github.com/tombatossals/chords-db ) to the frettedChordSchema used for fretted chord models.

Instrument is taken as an arg. E.g.,

```bash
node format guitar
```

Formatted chord banks are exported to ./formatted

## import

Tool to import chord bank to a Mongo database.

In order to import to your database, you'll need to set the following environment variables (or in a .env in this directory):

```
MONGO_USERNAME
MONGO_PASSWORD
MONGO_HOST
```

###### Example usage

```bash
node import guitar
```

