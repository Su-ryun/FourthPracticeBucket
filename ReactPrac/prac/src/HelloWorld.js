import React from 'react';

export default class HelloWorld extends React.Component{
  render() {
    return <p> Cool ranch, {this.props.greetTarget}! </p>
  }
}
