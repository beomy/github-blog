import React, { Component } from 'react';
import request from 'request';
import logo from './logo.svg';
import './App.css';

import { ProfileContainer } from './containers';

class App extends Component {
  render() {
    return (
      <div>
        <ProfileContainer />
      </div>
    );
  }
}

export default App;
