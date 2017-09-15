import { fromJS } from 'immutable';
import { GET_DATA, SET_DATA, HIDE_CONTENT, SET_TRUE } from './AppActions';

const initialState = fromJS({
  loading: false,
  data: '',
  showContent: false,
});

const appReducer = (state = initialState, action) => {
  console.log(state);
  console.log(action);
  switch (action.type) {
    case GET_DATA:
      // return { ...state, loading: !state.loading };
      return state.set('loading', true);
    case SET_DATA:
      // return { ...state, data: action.payload };
      return state.set('data', action.payload);
    case HIDE_CONTENT:
      return { ...state, showContent: false };
    case SET_TRUE:
      // return { ...state, loading: true };
      return state.set('loading', true);
    default:
      return state;
  }
};

export default appReducer;
