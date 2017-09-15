import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CSSModules from 'react-css-modules';
import { createStructuredSelector } from 'reselect';

// import TextDecoration from 'Components/TextDecoration';
// import Pass from 'Components/Pass';
// import { Output, Input, CaseChanger } from 'Tools/Output';

import { getLoading } from './appSelecter';
import * as AppActions from './AppActions';
import styles from './app.scss';

// const App = () => (
//   <div style={{ textAlign: 'center' }}>
//     <h1 styleName='blue'>Hello World 5</h1>
//     <p>
//       <TextDecoration
//         content='die ist der eis baum'
//       />
//       <Pass content='content' pass='pass ->' />
//     </p>
//     <div>{Output()}</div>
//     <div>{Input('Loremo')}</div>
//     <div>{new CaseChanger('lowerCASE').output()}</div>
//   </div>);
//
// export function App(props) {
//   console.log(props);
//   return (
//     <div>
//       <h1>Lorem</h1>
//       <div className='description' >
//         { JSON.stringify(props.app.loading) }
//       </div>
//     </div>
//   );
// }
//
// App.propTypes = {
//   app: PropTypes.shape({
//     loading: PropTypes.bool,
//   }),
// };
//
// App.defaultProps = {
//   app: false,
// };
/* eslint-disable */
export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Lorem: 'ipsum',
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.props.getData();
  }


  render() {
    console.log(this);
    return (
      <div style={{ textAlign: 'center' }}>
        <h1 styleName='blue'>whoop {this.state.Lorem}</h1>
        <div className='description'>
          {JSON.stringify(this.props.loading)}
          <br />
          {this.props.loadingStatus.toString()}
        </div>
        <button onClick={this.clickHandler}>click</button>
        <Link to='/text'>to text</Link>
      </div>);
  }
}

App.propTypes = {
  getData: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  data: PropTypes.string.isRequired,
};

/* eslint-disable */
const mapStateToProps = createStructuredSelector({
  loadingStatus: getLoading(),
});
// const mapStateToProps = state => {
//   return {
//     loadingStatus: getLoading(state),
//   }
// };
// { ...state }

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    ...AppActions,
  }, dispatch)
);


export default connect(mapStateToProps, mapDispatchToProps)(CSSModules(App, styles));
