export const list = {
    items:
    [{
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
  },
  {
    item: 'Discover Source code of Existence',
    completed: false,
    id: 783837387
  },
  {
    item: 'Bring in Trash Can',
    completed: false,
    id: 45384778
  },
  {
    item: 'Pet the Dog',
    completed: true,
    id: 4537954354
  }]
}

export const reducer = (state, action) => {
    switch(action.type) {
        case "ADD_TODO":
            const newToDo = {
                item: action.payload,
                completed: false,
                id: Date.now()
            };
          return {
                ...state,
                items: [...state.items, newToDo]
            };
        case "TOGGLE_TASK": 
          return {
                 ...state,
                 items: state.items.map(item => 
                 item.id === action.payload ? {...item, completed: !item.completed } : item    
                 )
            }
        case "CLEAR":
          return{
                  ...state,
                  items: state.items.filter(item => item.completed === false)
                    }

       default:
            return state;
    }
    
}