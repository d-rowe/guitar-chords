const initResults = [];

const results = (state = initResults, action) => {
  switch (action.type) {
    case 'SET_RESULTS': {
      return action.results;
    }
    default:
      return state;
  }
};

export default results;
