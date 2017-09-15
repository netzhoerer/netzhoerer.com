export const GET_DATA = 'GET_DATA';
export const SET_DATA = 'SET_DATA';
export const SHOW_CONTENT = 'SHOW_CONTENT';
export const HIDE_CONTENT = 'HIDE_CONTENT';

export const getData = () => ({
  type: GET_DATA,
});

export const setData = payload => ({
  type: SET_DATA,
  payload,
});

export const showContent = () => ({
  type: SHOW_CONTENT,
});

export const hideContent = () => ({
  type: HIDE_CONTENT,
});

