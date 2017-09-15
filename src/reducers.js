import appReducer from 'Components/App/AppReducers';
// import {
//   categoriesReducer,
//   categoryReducer,
//   previousCategoryReducer,
// } from 'containers/Category/reducers';
// import searchReducer from 'containers/Search/reducers';
// import navigationReducer from 'containers/Sidebar/reducers';
// import {
//   articleReducer,
//   articlesReducer,
//   previousArticleReducer,
// } from 'containers/Article/reducers';

export default () => (
  (state = {}, action) => ({
    app: appReducer(state.app, action),
  })
);
