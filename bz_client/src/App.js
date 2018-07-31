import React, { Component } from 'react';
import './App.css';
import ClientsContainer from './components/ClientsContainer';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <h1 className="App-title">Biz Dash</h1>
        </header>
        
        <ClientsContainer />
        
      </div>
    );
  }
}

export default App;
