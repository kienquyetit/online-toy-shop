import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Posts from './components/Posts';
import Postform from './components/Postform';

import Header from './layouts/Header/Header'

import { Provider } from 'react-redux';

import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <Header />
          <Postform />
          <Posts />
      </Provider>

    );
  }
}

export default App;
