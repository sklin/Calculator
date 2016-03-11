//var React = require('react');
//var ReactDOM = require('react-dom');

import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';

import RaisedButton from 'material-ui/lib/raised-button';

injectTapEventPlugin();

const reducer = (state = '', action) => {
  switch(action.type) {
    case 'INPUT':
      if( action.input === '+' || action.input === '-' || action.input === '*' || action.input === '+' ) {
        //return state + ' ' + action.input + ' ';
        return `${state} ${action.input} `;
      }
      else {
        return state + action.input;
      }
    case 'EVAL':
      let result = eval(state);
      if(result)
        return eval(state).toString();
      else
        return '';
    case 'RESET':
      return '';
    default:
      return state;
  }
}


const store = createStore(reducer);

let Calculator = (
  { equation }
) => {
  return (
    <div>
      <h1>Calculator</h1>
      <br />
      <h1>{equation}</h1>
      <RaisedButton
        label="7"
        onClick={() => store.dispatch({ type: 'INPUT', input: '7'})}
        />
      <RaisedButton
        label="8"
        onClick={() => store.dispatch({ type: 'INPUT', input: '8'})}
        />
      <RaisedButton
        label="9"
        onClick={() => store.dispatch({ type: 'INPUT', input: '9'})}
        />
      <br />
      <RaisedButton
        label="4"
        onClick={() => store.dispatch({ type: 'INPUT', input: '4'})}
        />
      <RaisedButton
        label="5"
        onClick={() => store.dispatch({ type: 'INPUT', input: '5'})}
        />
      <RaisedButton
        label="6"
        onClick={() => store.dispatch({ type: 'INPUT', input: '6'})}
        />
      <br />
      <RaisedButton
        label="1"
        onClick={() => store.dispatch({ type: 'INPUT', input: '1'})}
        />
      <RaisedButton
        label="2"
        onClick={() => store.dispatch({ type: 'INPUT', input: '2'})}
        />
      <RaisedButton
        label="3"
        onClick={() => store.dispatch({ type: 'INPUT', input: '3'})}
        />
      <br />

      <RaisedButton
        label="Log"
        onClick={() => console.log(store.getState())}
        />
      <RaisedButton
        label="0"
        onClick={() => store.dispatch({ type: 'INPUT', input: '0'})}
        />
      <RaisedButton
        label="Eval"
        onClick={() => store.dispatch({ type: 'EVAL'})}
        />
      <RaisedButton
        label="Reset"
        onClick={() => store.dispatch({ type: 'RESET'})}
        />
      <br />
      <RaisedButton
        label="+"
        onClick={() => store.dispatch({ type: 'INPUT', input: '+'})}
        />
      <RaisedButton
        label="-"
        onClick={() => store.dispatch({ type: 'INPUT', input: '-'})}
        />
      <RaisedButton
        label="*"
        onClick={() => store.dispatch({ type: 'INPUT', input: '*'})}
        />
      <RaisedButton
        label="/"
        onClick={() => store.dispatch({ type: 'INPUT', input: '/'})}
        />
    </div>
  );
};

let Container = connect(
  (state) => {
    return { equation: state };
  }
)(Calculator);

render(
  <Provider store={store}>
    <Container />
  </Provider>,
    document.getElementById("app")
);
