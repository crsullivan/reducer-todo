import React, { useState, useReducer } from 'react';
import {list, reducer, items} from '../reducers/reducer';

export const ToDo = () => {
    const [item, dispatch] = useReducer(reducer, list);
    const [newToDo, setNewToDo] = useState('');

    const handleChanges = e => {
        setNewToDo(e.target.value);
        e.preventDefault();
    };

    const addItem = (item) => {
        const newItem = {
            name:item,
            id:Date.now(),
            completed:false
        }
    }

    const submitItem = e => {
        e.preventDefault();
        addItem(item)
    }
console.log(dispatch)
console.log(list)
    return (
        <div>
            <form onSubmit={submitItem}>
                <input
                    className="todo-input"
                    type="text"
                    name="newToDo"
                    value={newToDo}
                    onChange={handleChanges}
                    
                    >
                    
                </input>
                <button
                    onClick={() => {
                        dispatch({ type: 'ADD_ITEM', payload:'newToDo'});
                    }}
                >Add Task</button>
            </form>
            <div>
            {list.items.map(data => {
                return (
            
                <div>
                    <h3>{data.item}</h3>
                </div>
                
                )
            })}
            </div>
        </div>
       )
}