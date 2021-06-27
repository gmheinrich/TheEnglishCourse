import './App.css';
import React, { Component } from 'react';
import initFontAwesome from './initFontAwesome';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';

initFontAwesome();

class App extends Component {

  render() {
    return(
      <BrowserRouter>
        <div>
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
