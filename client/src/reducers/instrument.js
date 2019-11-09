const initInstrument = 'guitar';

const instrument = (state = initInstrument, action) => {
  switch (action.type) {
    case 'SET_INSTRUMENT': {
      return action.instrument;
    }
    default:
      return state;
  }
};

export default instrument;
