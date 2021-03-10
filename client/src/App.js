import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import { Container } from 'reactstrap'

import './App.css';

import AppNavbar from './components/AppNavbar'
import ShoppingList from './components/ShoppingList';
import ItemModal from './components/ItemModal';

import { Provider } from 'react-redux';
import store from './store';

class App extends React.Component {
  render() {
    return(
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <Container>
            <ItemModal />
            <ShoppingList />
          </Container>
        </div>
      </Provider>
    )
  }
}

export default App;
