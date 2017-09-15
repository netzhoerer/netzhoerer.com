/* eslint-disable */
import React, { Component } from 'react';
import TextDecoration from 'Components/TextDecoration';


class Pass extends Component {
  constructor(props, context) {
    super(props);
    this.hasu = '';
  }

  shouldComponentUpdate(nextProps) {
    return this.props.content !== nextProps.content
  }

  componentWillUpdate(nextProps, nextState, nextContext) {
    console.log(this.props.content !== nextProps.content)

    this.hasu = 'true'
  }

  render() {
    return (
      <div>
        <h1>{this.hasu}</h1>
        <h1>textdeco</h1>
        <TextDecoration content={this.props.content} />
        <h1>pass</h1>
        <div>{this.props.pass}</div>
      </div>
    );
  }
}

export default Pass;