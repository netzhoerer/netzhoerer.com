import { GET_DATA, SET_DATA, HIDE_CONTENT, SET_TRUE } from './AppActions';


const appReducer = (state = {}, action) => {
  console.log(state);
  console.log(action);
  switch (action.type) {
    case GET_DATA:
      return { ...state, loading: !state.loading };
    case SET_DATA:
      return { ...state, data: action.payload };
    case HIDE_CONTENT:
      return { ...state, showContent: false };
    case SET_TRUE:
      return { ...state, loading: true };
    default:
      return state;
  }
};

export default appReducer;
