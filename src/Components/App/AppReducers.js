import { GET_DATA, SET_DATA, HIDE_CONTENT } from './AppActions';


const appReducer = (state = {}, action) => {
  console.log(state);
  switch (action.type) {
    case GET_DATA:
      return { ...state, loading: !state.loading };
    case SET_DATA:
      return { ...state, loading: false };
    case HIDE_CONTENT:
      return { ...state, showContent: false };
    default:
      return state;
  }
};

export default appReducer;
