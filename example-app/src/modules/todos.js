// @flow
import * as Immutable from 'immutable';
//const Immutable = require('immutable');

type TodoAction = {
  type: string,
  todo: string,
  index: number
}

export default (state = Immutable.List(['Code More!']), action : TodoAction) => {
  switch(action.type) {
    case 'addTodo':
      return state.unshift(action.todo)
    case 'deleteTodo':
      return state.filter((todo, index) => index !== action.index)
    default:
      return state
  }
}


export function addTodo(todo : string){
  return {
    type: 'addTodo',
    todo
  }
}

export function deleteTodo(index : number){
  return {
    type: 'deleteTodo',
    index
  }
}
