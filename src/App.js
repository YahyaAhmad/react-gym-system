import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Body from './components/Body';
import './css/App.css';
import './css/body.css';
import './css/loader.css';

//Redux


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <Body />
        
      </div>
    );
  }
}

export default App;
