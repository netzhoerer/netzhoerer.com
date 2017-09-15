import { createStore, applyMiddleware, compose } from 'redux';
// import apiMiddleware from './middleware';
// import fetchDataMiddleware from './fetchDataMiddleware';
// import trackingMiddleware from './trackingMiddleware';
// import searchMiddleware from './searchMiddleware';
import testMiddleware from './Tools/middleware/testMiddleware';
import createReducers from './reducers';

/* eslint-disable-next-line */
const devtools = window.devToolsExtension || (() => noop => noop);


const configureStore = (initialState) => {
  const enhancers = [
    applyMiddleware(
      // fetchDataMiddleware,
      // trackingMiddleware,
      // searchMiddleware,
      testMiddleware,
    ),
    devtools(),
  ];

  const store = createStore(
    createReducers(),
    initialState,
    compose(...enhancers),
  );

  return store;
};

export default configureStore;
