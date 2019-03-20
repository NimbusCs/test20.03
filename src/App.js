import React, { Component } from 'react';
import './App.css';

import Navigation from './components/Nav';
import Reader from './components/Reader';


class App extends Component {


  render() {
    return (
      <div className="App">
        <Navigation title="OrgLoc"/>
        <div className="container">
          <div className="mt-4">
            <div className="col-md-12 text-center">
              <Reader />              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
