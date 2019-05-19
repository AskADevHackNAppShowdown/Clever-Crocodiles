import React, { Component } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import TodoCard from './components/TodoCard';
import SpecialTextBox from './containers/SpecialTextBoxContainer';
import SpecialText from './containers/SpecialTextContainer';
import './App.css';

class App extends Component {
  state = {
    todos: ['example','example','example','example','example', 'example'],
    text: '',
  }

  render() {
    const cards = this.state.todos.map((t,i)=>{
      return <TodoCard todo={t} key={i} />
    });

    
    return (
      <div className="App">
          <Header/>
            <SpecialTextBox/>
            <SpecialText/>
            <input></input>
            <div className="content">
                {cards}
            </div>
          <Footer/>
      </div>
    )
  }
}

export default App;