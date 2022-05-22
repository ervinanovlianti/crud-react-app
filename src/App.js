import React, { Component } from 'react'
import './App.css';
import List from './List';
class App extends Component {
  constructor(props){
    super(props)
      this.state = {
        todoItem : '',
        items : []
      }
    }
  

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({
      items: [...this.state.items, this.state.todoItem],
      todoItem: ''
    })
  }
  handleChange = (event) => {
    this.setState({
      todoItem: event.target.value

    })
  }


  render(){
    return (
      <div className="App">
        <nav class = "navbar navbar-expand-lg bg-primary"  >
          <div class = "container-fluid" >
            <a class = "navbar-brand" href = "#" > Navbar </a> 
            <button class = "navbar-toggler" type = "button" data-bs-toggle = "collapse" data-bs-target = "#navbarNav" aria-controls = "navbarNav" aria-expanded = "false" aria-label = "Toggle navigation">
            <span class = "navbar-toggler-icon" > </span> </button> 
            <div class = "collapse navbar-collapse" id = "navbarNav">
              <ul class = "navbar-nav" >
                  <li class = "nav-item" >
                    <a class = "nav-link" aria-current = "page" href = "#" > Home </a> 
                  </li> 
                  <li class = "nav-item" >
                    <a class = "nav-link" aria-current = "page" href = "#" > Home </a> 
                  </li> 
                  <li class = "nav-item" >
                    <a class = "nav-link" aria-current = "page" href = "#" > Home </a> 
                  </li> 
              </ul> 
            </div> 
        </div> 
        </nav>
        < div className = 'todo-list mt-5' >
          <form onSubmit={this.handleSubmit}>
            <input value={this.state.todoItem} onChange={this.handleChange} />
            <button type = "button" className="btn btn-primary"> Primary </button>
          </form>
          <List items={this.state.items}/>
        </div>

      </div>
    );
  }
}

export default App;
