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
    const filteredItems = this.state.toDo.splice(1, key)
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
            <div style={{padding: '10px'}}>
            <input style={{fontSize: '20px'}}
            onChange = { e => {
              this.setState({text: e.target.value}) 
              }}/> 
            <button style={{fontSize: '20px'}}
            onClick = { () => {
              this.setState({toDo: [...this.state.toDo, this.state.text]}) 
              }}>Add To-do</button> 
              </div>
            <div className="content">
                {cards}
            </div>
          <Footer/>
      </div>
    )
  }
}

export default App;