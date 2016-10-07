import * as Immutable from 'immutable'

export type State = Immutable.List<string>

export default (state : State = Immutable.List(['Code More!']), action : Action) : State => {
  switch(action.type) {
    case 'addTodo':
      return state.unshift(action.todo);
    case 'deleteTodo':
      return state.filter((todo, index) => index !== action.index) as State;
    default:
      return state
  }
}

interface AddTodoAction {
  type: 'addTodo',
  todo: string
}

interface DeleteTodoAction {
  type: 'deleteTodo',
  index: number
}

type Action = AddTodoAction | DeleteTodoAction

export type AddTodoBoundAction = (string) => void;
export function addTodo(todo: string) : AddTodoAction {
  return {
    type: 'addTodo',
    todo
  }
}

export type DeleteTodoBoundAction = (number) => void;
export function deleteTodo(index: number) : DeleteTodoAction {
  return {
    type: 'deleteTodo',
    index
  }
}
