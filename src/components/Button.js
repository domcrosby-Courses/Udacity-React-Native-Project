import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

const propTypes = {
  onPress: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  filled: PropTypes.bool,
  children: PropTypes.string.isRequired
};

const defaultProps = {
  disabled: false,
  filled: false
};

class Button extends Component {
  buttonStyle() {
    const { disabled, filled } = this.props;
    const colr = disabled ? '#111' : '#007aff';
    return {
      flex: 1,
      alignSelf: 'stretch',
      backgroundColor: filled ? colr : '#fff',
      borderRadius: 5,
      borderWidth: 1,
      borderColor: colr,
      margin: 10
    };
  }

  textStyle() {
    const { disabled, filled } = this.props;
    const colr = disabled ? '#111' : '#007aff';
    return {
      alignSelf: 'center',
      color: filled ? '#fff' : colr,
      fontSize: 16,
      fontWeight: '600',
      paddingTop: 10,
      paddingBottom: 10
    };
  }

  render() {
    const { onPress, disabled, children } = this.props;
    return (
      <TouchableOpacity onPress={onPress} style={this.buttonStyle()} disabled={disabled}>
        <Text style={this.textStyle()}>{children}</Text>
      </TouchableOpacity>
    );
  }
}

export default Button;

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
