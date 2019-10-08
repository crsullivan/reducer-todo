import React, { useState, useReducer} from 'react';
import './App.css';
import {ToDo} from './components/ToDo';
import {reducer, list} from './reducers/reducer';

function App() {
  const [state, dispatch] = useReducer(reducer, list);
  const [item, setItem] = useState('')

  const handleChanges = event => {
    setItem(event.target.value)
    event.preventDefault();
  }
  const submitItem = event => {
    event.preventDefault();
  }
    return (
      <div className="App">
      <ToDo dispatch={dispatch}/>

      <form onSubmit={submitItem}>
        <input
          type="text"
          name="item"
          value={item}
          onChange={handleChanges}
          placeholder="Add item"
        />
        <button onClick={() => dispatch({ type: 'ITEM', payload: item })}>Add Item</button>
      </form>
      </div>
    );
  }

export default App;
