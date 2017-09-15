/*eslint spaced-comment: ["error", "never"]*/
/*eslint no-console: ["error", { allow: ["warn", "error"] }]*/
/*eslint-disable no-param-reassign*/

import 'whatwg-fetch';

import { GET_DATA, setData, setToTrue } from 'Components/App/AppActions';

const testMiddleware = store => next => (action) => {
  if (action.type === GET_DATA) {
    (new Promise((resolve, reject) => {
      const date = new Date();
      setTimeout(() => {
        resolve(`Date: ${date}`);
      }, 1000);
      setTimeout(() => {
        reject(`Date: ${date}`);
      }, 2000);
    })).then((data) => {
      store.dispatch(setData(data));
    }).then(() => {
      store.dispatch(setToTrue());
    });
  }

  return next(action);
};

export default testMiddleware;
