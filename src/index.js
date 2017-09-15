/* eslint-disable */
// import React from 'react'
// import ReactDOM from 'react-dom'
// import { AppContainer } from 'react-hot-loader'
//
// import App from 'Components/App';
//
// ReactDOM.render(
//   <AppContainer>
//     <App />
//   </AppContainer>,
//   document.getElementById('app')
// );
//
// // Hot Module Replacement API
// if (module.hot) {
//   module.hot.accept('./Components/App', () => {
//     const NextApp = require('Components/App').default;
//     ReactDOM.render(
//       <AppContainer>
//         <NextApp />
//       </AppContainer>,
//       document.getElementById('app')
//     );
//   });
// }


/*eslint spaced-comment: ["error", "never"]*/
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Redirect } from 'react-router';
import { BrowserRouter } from 'react-router-dom'

import { AppContainer } from 'react-hot-loader'

import { Provider } from 'react-redux';
import configureStore from './store' ;

import App from 'Components/App';


const initialState = {
  app: {
    loading: false,
  },
};


const store = configureStore(initialState);

// import createBrowserHistory from 'history/lib/createBrowserHistory';
// const history = useRouterHistory(createBrowserHistory)({
//   basename: /*rdph:std_base_path*/'/'/**/,
//   // basename: /*rdph:std_base_path*/'/previews/postbank/infothek/'/**/,
// });

document.addEventListener('DOMContentLoaded', () => {
  // const container = document.getElementById('app') || document.getElementById('article');

  render(
    <AppContainer>
      <Provider store={store}>
        {/*<Router history={history}>*/}
        <BrowserRouter
          //basename={'basename'}
          //forceRefresh={optionalBool}
          //getUserConfirmation={optionalFunc}
          //keyLength={optionalNumber}
        >
          <App />
        </BrowserRouter>
      </Provider>
    </AppContainer>,
    document.getElementById('app'),
  );

// Hot Module Replacement API
  if (module.hot) {
    module.hot.accept('./Components/App', () => {
      const NextApp = require('Components/App').default;
      render(
        <AppContainer>
          <Provider store={store}>
            {/*<Router history={history}>*/}
            <BrowserRouter
              //basename={'basename'}
              //forceRefresh={optionalBool}
              //getUserConfirmation={optionalFunc}
              //keyLength={optionalNumber}
            >
              <NextApp />
            </BrowserRouter>
          </Provider>
        </AppContainer>,
        document.getElementById('app'),
      )
      ;
    });
  }
  // render(
  //   (<Breakpoint breakpoints={breakpoints}>
  //     <Provider store={store}>
  //       <Router history={history}>
  //         <Route component={App}>
  //           <Redirect from="index.html" to="/" />
  //           {/*<Redirect from="/(#!)" to="/" />*/}
  //           <Route path="/(index.html)" component={Category} />
  //           <Route path="/kategorie_:category" component={Category} />
  //           <Route path="/artikel_:url" component={Article} />
  //         </Route>
  //       </Router>
  //     </Provider>
  //   </Breakpoint>),
  //   container
  // );
  //
  // fontObserver();
});
