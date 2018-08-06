import React, { Component } from 'react';
import './App.css';
import ListsContainer from './components/ListsContainer';
console.log(React.version);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Hello Hiplyst!</h1>
        </header>
        <ListsContainer />
      </div>
    );
  }
}




















// import React, { Component } from 'react';
// import './App.css';
// import ClientsContainer from './components/ClientsContainer';

// class App extends Component {
  
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
          
//           <h1 className="App-title">Biz Dash</h1>
//         </header>
        
//         <ClientsContainer />
        
//       </div>
//     );
//   }
// }

export default App;
