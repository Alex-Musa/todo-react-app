import React, { Component } from 'react';
import TodoItems from './components/TodoItem/TodoItems';
import AddItem from './components/Additems/Additems';

class App extends Component {
  state = {
    items : [
      {id:1,name:'alex',age:31},
      {id:2,name:'ali',age:25},
      {id:3,name:'omar',age:32},
    ]
  }
  
  deleteItem = (id) => {
      // Delete with filter
      let items = this .state.items.filter(item => {
        return item.id !== id
      })
      this.setState({items})
  }

  itemDelete = (id) => {
      // delete item splice function 
      let items = this.state.items;
      let i = items.findIndex(item => item.id === id)
      items.splice(i,1)
      // update status after delete ==> {items:items}
      this.setState({items})
  }


  addItem = (item) => {
    item.id = Math.random();
    let items = this.state.items;
    items.push(item);
    this.setState({items})
  }
  
  render(){
    return(
      <div className="App container">
        <h1 className="text-center">Todo List</h1>
        <TodoItems items={this.state.items} deleteItem={this.deleteItem} />
        <AddItem addItem={this.addItem} />
      </div>
    )
  }
}

export default App;
