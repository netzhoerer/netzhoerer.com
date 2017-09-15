import { fromJS } from 'immutable';
import { SET_CONT } from './TextActions';

const initialState = fromJS({
  content: false,
});

const textReducer = (state = initialState, action) => {
  console.log(state);
  console.log(action);
  switch (action.type) {
    case SET_CONT:
      // return Object.assign({}, state, { content: action.payload });
      return state.set('content', action.payload);
    default:
      return state;
  }
};

export default textReducer;
