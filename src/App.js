import React, { Component } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import TodoCard from './components/TodoCard';
import './App.css';

class App extends Component {
  state = {
    toDo: [],
    text: '',
  }

  deleteTodo = key => {
    const filteredItems = this.state.toDo.filter(item => {
      return item.key !== key
    })
    this.setState({
      toDo: filteredItems,
    })  
}


  render() {

    const cards = this.state.toDo.map((t,i)=>{
        return <TodoCard todo={t} key={i} deleteTodo={this.deleteTodo.bind(this, i)}/>
      })

    return (
      <div className="App">
          <Header/>
            <input onChange = { e => {
              this.setState({text: e.target.value}) 
              }}/> 
            <button onClick = { () => {
              this.setState({toDo: [...this.state.toDo, this.state.text]}) 
              }}>Add Todo</button> 
            <div className="content">
                {cards}
            </div>
          <Footer/>
      </div>
    )
  }
}

export default App;