import React from 'react';
import 'semantic-ui-css/semantic.min.css'

import './App.css';

import Header from './components/Header';
import Content from './components/Content';

function App() {
  return (
    <div className="App">
      <Header/>
      <Content/>
    </div>
  );
}

export default App;
