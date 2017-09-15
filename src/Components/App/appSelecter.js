/**
 * App selectors
 */

import { createSelector } from 'reselect';

const selectApp = state => state.app;

const getLoading = () => createSelector(
  [selectApp],
  appState => appState.get('loading'),
);

export {
  selectApp,
  getLoading,
};
