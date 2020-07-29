const initialState = {
  search: ''
};

function searchReducer(state = initialState, action) {
  if (action.type === 'SEARCH') {
    state.search = action.payload;
  }
  
  return {...state};
};

export default searchReducer;