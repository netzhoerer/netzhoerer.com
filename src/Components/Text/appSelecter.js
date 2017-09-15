/**
 * App selectors
 */

import { createSelector } from 'reselect';

const selectText = state => state.text;
const selectApp = state => state.app;
// const selectApp = state => ({
//   loading: state.app.get('loading'),
//   data: state.app.get('data'),
// });


const isString = () => createSelector(
  [selectText, selectApp],
  // appState => typeof appState.content === 'string',
  (text, app) => {
    if (text.get('content') && !app.get('loading')) {
      return {
        content: 'halb geladen',
        textContent: text.get('content').toString(),
        loading: app.get('loading').toString(),
      };
    }

    if (text.get('content') && app.get('loading')) {
      return {
        content: 'geladen',
        textContent: text.get('content').toString(),
        loading: app.get('loading').toString(),
      };
    }

    if (!text.get('content') && app.get('loading')) {
      return {
        content: 'only loaded',
        textContent: text.get('content').toString(),
        loading: app.get('loading').toString(),
      };
    }
    return {
      content: 'nicht geladen',
      textContent: text.get('content').toString(),
      loading: app.get('loading').toString(),
    };
  },
);

export {
  selectText,
  isString,
};
