import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import './App.css';
import AppNavbar from './components/AppNavbar'

class App extends React.Component {
  render() {
    return(
      <div className="App">
        <AppNavbar></AppNavbar>
      </div>
    )
  }
}

export default App;
