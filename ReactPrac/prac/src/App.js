import React from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom'

var heading = document.querySelector("#colorHeading");

export class ColorLabel extends React.Component {
  render() {
     return ReactDOM.createPortal(
      ": " + this.props.color,
      heading
    );
  }
}


export class Colorizer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "",
      bgColor: "white"
    };
    this.colorValue = this.colorValue.bind(this);
    this.setNewColor = this.setNewColor.bind(this);
  }
  colorValue(e) {
    this.setState({
      color: e.target.value
    });
  }
  setNewColor(e) {
    this.setState({
      bgColor: this.state.color
    });

    this._input.focus();
    this._input.value = "";

    e.preventDefault();
  }
  render() {
    var squareStyle = {
    backgroundColor: this.state.bgColor
  };

  var self = this;

  return (
    <div className="colorArea">
    <div style={squareStyle} className="colorSquare"></div>

    <form onSubmit={this.setNewColor}>
      <input onChange={this.colorValue}
              ref={
                function(el) {
                  self._input = el;
                }
              }
              placeholder="Enter a color value"></input>
      <button type="submit">go</button>
    </form>
    <ColorLabel color={this.state.bgColor}/>
  </div>
  );
  }
}
