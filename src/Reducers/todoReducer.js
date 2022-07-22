function reducer(state, action) {
  switch (action.type) {
    case 'SET_TODO':
      return {
        ...state,
        todo: action.value,
      };
    case "ADD_TODO":
      return {
        ...state,
        todo: "",
        todos2: [...state.todos2, action.todo],
      };
    case 'SET_SEARCH':
    return{
        ...state,
        search:action.value
    };    
  }
}

export default reducer
