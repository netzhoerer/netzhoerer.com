export const GET_DATA = 'GET_DATA';
export const SET_DATA = 'SET_DATA';
export const SHOW_CONTENT = 'SHOW_CONTENT';
export const HIDE_CONTENT = 'HIDE_CONTENT';
export const SET_TRUE = 'SET_TRUE';

export const setToTrue = () => ({
  type: SET_TRUE,
});

export const getData = payload => ({
  type: GET_DATA,
  payload,
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

