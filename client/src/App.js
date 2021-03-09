import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import './App.css';
import AppNavbar from './components/AppNavbar'
import ShoppingList from './components/ShoppingList';

class App extends React.Component {
  render() {
    return(
      <div className="App">
        <AppNavbar></AppNavbar>
        <ShoppingList></ShoppingList>
      </div>
    )
  }
}

export default App;
