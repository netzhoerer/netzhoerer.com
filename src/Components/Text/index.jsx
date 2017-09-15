import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CSSModules from 'react-css-modules';
// import TextDecoration from 'Components/TextDecoration';
// import Pass from 'Components/Pass';
// import { Output, Input, CaseChanger } from 'Tools/Output';
import { createStructuredSelector } from 'reselect';

import { isString } from './appSelecter';
import * as TextActions from './TextActions';
import styles from './text.scss';


export class Text extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Lorem: 'ipsum',
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps, 'nextProps');
  }

  clickHandler() {
    this.props.setContent('new content');
  }

  render() {
    console.log(this, 'Text');
    return (
      <div style={{ textAlign: 'center' }}>
        <h1 styleName='blue'>whoop {this.state.Lorem}</h1>
        <div className='description'>
          {Object.keys(this.props.isString).map(
            el => (
              <div key={`description_${el}`}>{el}: {this.props.isString[el]}</div>
            ),
          )}
        </div>
        <button onClick={this.clickHandler}>click</button>
        <Link to='/'>to app</Link>
      </div>);
  }
}

Text.propTypes = {
  setContent: PropTypes.func.isRequired,
  isString: PropTypes.string.isRequired,
};

const mapStateToProps = createStructuredSelector({
  isString: isString(),
});
// const mapStateToProps = state => isString(state);
// content: 'old content',


const mapDispatchToProps = dispatch => (
  bindActionCreators({
    ...TextActions,
  }, dispatch)
);


export default connect(mapStateToProps, mapDispatchToProps)(CSSModules(Text, styles));
