import Immutable from 'immutable'

export default (state = Immutable.List(['Code More!']), action) => {
  switch(action.type) {
    case 'addTodo':
      return state.unshift(action.todo)
    case 'deleteTodo':
      return state.filter((todo, index) => index !== action.index)
    default:
      return state
  }
}


export function addTodo(todo){
  return {
    type: 'addTodo',
    todo
  }
}

export function deleteTodo(index){
  return {
    type: 'deleteTodo',
    index
  }
}
