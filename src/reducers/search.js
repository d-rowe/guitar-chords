const initSearch = {
  inputText: '',
  parsed: {},
  rendered: {
    short: '',
    academic: ''
  },
  suggestions: [],
  results: []
};

const search = (state = initSearch, action) => {
  switch (action.type) {
    case 'SET_SEARCH_INPUT_TEXT': {
      return {
        ...state,
        inputText: action.inputText
      };
    }

    case 'SET_SUGGESTIONS': {
      return {
        ...state,
        suggestions: action.suggestions
      };
    }

    case 'SET_PARSED_CHORD': {
      return {
        ...state,
        parsed: action.parsedChord
      };
    }

    case 'SET_RENDERED_CHORD': {
      return {
        ...state,
        rendered: action.renderedChord
      };
    }

    default:
      return state;
  }
};

export default search;
