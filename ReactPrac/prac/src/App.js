import React from 'react';
import logo from './logo.svg';

export class LightningCounter extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      strikes: 0
    };
    this.timerTick = this.timerTick.bind(this);
  }

  componentDidMount() {
    setInterval(this.timerTick, 1000);
  }

  timerTick() {
    this.setState({
      strikes: this.state.strikes + 100
    });
  }

  render() {
    return (
      <h1>{this.state.strikes}</h1>
    );
  }

}

export class LightningCounterDisplay extends React.Component {
  render() {
    var divStyle = {
      width: 250,
      textAlign: "center",
      backgroundColor: "black",
      padding: 40,
      fontFamily: "sans-serif",
      color: "#999",
      borderRadius: 10
    };

    return (
      <div style={divStyle}>
        <LightningCounter/>
      </div>
    );
  }
}
