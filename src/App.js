import React, { Component } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import TodoCard from './components/TodoCard';
import './App.css';

class App extends Component {
  state = {

  }

  render() {
    return (
      <div className="App">
          <Header/>
            <div className="content">
              
            </div>
          <Footer/>
      </div>
    )
  }
}

export default App;