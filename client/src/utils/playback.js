import Soundfont from 'soundfont-player';

const instruments = {
  'acoustic guitar': 'acoustic_guitar_steel',
  'clean electric guitar': 'electric_guitar_clean',
  'distorted electric guitar': 'distortion_guitar'
};

const ac = new AudioContext();

export const playNote = (note, instrument, duration) => {
  Soundfont.instrument(ac, instruments[instrument]).then(inst => {
    inst.play(note, ac.currentTime, { duration });
  });
};

export const playChord = (notesArr, instrument, duration, delay) => {
  if (!delay) {
    delay = 0;
  }
  Soundfont.instrument(ac, instruments[instrument]).then(inst => {
    notesArr.forEach((note, i) =>
      inst.play(note, ac.currentTime + delay * i, { duration })
    );
  });
};
