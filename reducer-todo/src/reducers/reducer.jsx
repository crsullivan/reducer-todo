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
        case 'ADD_ITEM':
            const newToDo = {
                item: action.payload,
                completed: false,
                id: Date.now()
            };
            return {
                ...state,
                list: [...state.items, newToDo]
            };
    default:
        return state;
    }
    
}