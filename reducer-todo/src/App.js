import React, {useState, useReducer } from 'react';
import ToDo from './components/ToDo'
import './App.css';
import {list, reducer } from './reducers/reducer'




function App() {

  const [state, dispatch] = useReducer(reducer, list);
  const [item, setItem] = useState('')

  const submitTask = e => {
    e.preventDefault();
  }
  const handleChanges = e => {
    setItem(e.target.value)
  }
  const toggleTask = (id) => {
    dispatch( { type:"TOGGLE_TASK", payload: id})
  }



  return (
    <div className="App">
      <form onSubmit={submitTask}>
        <input
          type="text"
          name="item"
          value={item}
          onChange={handleChanges}
          placeholder="Add item"
        />
        <button onClick={() => dispatch({ type: 'ADD_TODO', payload: item })}>Add a Task</button>
      </form>
      <button onClick={() => dispatch({type:"CLEAR"})}>Clear Completed Tasks</button>
      <ToDo state={state.items} toggleTask={toggleTask}/>
    </div>
  );
}

export default App;