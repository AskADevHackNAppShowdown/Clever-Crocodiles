import React, { Component } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import TodoCard from './components/TodoCard';
import SpecialTextBox from './containers/SpecialTextBoxContainer';
import SpecialText from './containers/SpecialTextContainer';
import './App.css';

class App extends Component {
  state = {

  }

  render() {
    return (
      <div className="App">
          <Header/>
            <div className="content">
                <SpecialTextBox/>
                <SpecialText/>
            </div>
          <Footer/>
      </div>
    )
  }
}

export default App;