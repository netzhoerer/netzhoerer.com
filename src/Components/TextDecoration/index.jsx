import React, { Component } from 'react';
import PropTypes from 'prop-types';


class TextDecoration extends Component {
  constructor(props) {
    super(props);
    this.text = props.content;
  }

  state = {
    typeOfNode: '',
    hovered: 0,
  }

  mouseEnterHandler = () => {
    this.setState({
      typeOfNode: 'enter',
      hovered: this.state.hovered < 10 ? this.state.hovered + 1 : 0,
    });
  }
  mouseLeaveHandler = () => {
    this.setState({
      typeOfNode: 'u',
    });
  }

  render() {
    return (
      <i
        onMouseEnter={this.mouseEnterHandler}
        onMouseLeave={this.mouseLeaveHandler}
      >
        {this.props.content}
        <br />
        <b>{this.state.typeOfNode}</b>
        {
          this.state.hovered > 0 &&
          <span>
            <br />
            <u>hoverg: {this.state.hovered}</u>
          </span>
        }
      </i>
    );
  }
}

TextDecoration.propTypes = {
  content: PropTypes.string,
};

TextDecoration.defaultProps = {
  content: '',
};

export default TextDecoration;
