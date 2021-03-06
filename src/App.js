import React, { Component } from 'react';
import './App.css';

import Home from './components/Home/Home'

import Header from './layouts/Header/Header'
import Footer from './layouts/Footer/Footer'

import { Provider } from 'react-redux';

import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Header />
        <Home />
        <Footer />
      </Provider>
    );
  }
}

export default App;
