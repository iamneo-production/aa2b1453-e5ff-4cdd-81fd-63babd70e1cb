import { createStore } from 'redux';

const initialState = {
  feedback: '',
};

const feedbackReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_FEEDBACK':
      return { ...state, feedback: action.payload };
    default:
      return state;
  }
};

const store = createStore(feedbackReducer);

export default store;