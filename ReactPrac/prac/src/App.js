import React from 'react';
import logo from './logo.svg';

export class Circle extends React.Component {
  render() {
    var circleStyle = {
      padding: 10,
      margin: 20,
      display: "inline-block",
      // Notice how this.props.bgColor is what's being passed from showCircle().
      backgroundColor: this.props.bgColor,
      borderRadius: "50%",
      width: 100,
      height: 100,
    };

    return (
      // The below is not JS code, it's JSX.
      <div style={circleStyle}>
      </div>
    );
  }
}

export function showCircle() {
  var colors = ["#393E41", "#E94F37", "#1C89BF", "#A1D363"];
  var ran = Math.floor(Math.random() * colors.length);

  // return a Circle with a randomly chosen color
  // Once again, the below is JSX code.
  return <Circle bgColor={colors[ran]} />;
}
