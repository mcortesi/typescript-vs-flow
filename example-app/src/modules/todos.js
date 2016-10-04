// @flow
import * as Immutable from 'immutable';
//const Immutable = require('immutable');

export type AddTodoAD = (x: string) => void
export type DeleteTodoAD = (x: number) => void

export type TodoAction = {
  type: string,
  todo: ?string,
  index: ?number
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


export function addTodo(todo : string) : TodoAction {
  return {
    type: 'addTodo',
    index: null,
    todo
  }
}

export function deleteTodo(index : number) : TodoAction {
  return {
    type: 'deleteTodo',
    todo: null,
    index
  }
}
