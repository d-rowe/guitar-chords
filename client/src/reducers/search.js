const initSearch = '';

const search = (state = initSearch, action) => {
  switch (action.type) {
    case 'SET_SEARCH': {
      return action.search;
    }
    default:
      return state;
  }
};

export default search;
