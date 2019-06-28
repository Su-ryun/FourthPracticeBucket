import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Colorizer} from './App';
import HelloWorld from './HelloWorld';
import * as serviceWorker from './serviceWorker';

var destination = document.querySelector("#container");

ReactDOM.render(
      <div>
        <Colorizer />
      </div>,
      document.querySelector("#container")
    );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
