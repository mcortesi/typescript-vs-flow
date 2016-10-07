import * as React from 'react'
import { connect } from 'react-redux'

import NewTodo from './NewTodo'
import { addTodo, deleteTodo, AddTodoBoundAction, DeleteTodoBoundAction } from '../modules/todos'
import { State } from "../modules/todos";

type TodoList = State;
type TodosProps = { todos: TodoList, addTodo: AddTodoBoundAction, deleteTodo: DeleteTodoBoundAction }
const Todos = ({todos, addTodo, deleteTodo} : TodosProps) => (
  <div>
    <h1>Todos</h1>
    <NewTodo onChange={e => {
      if(e.keyCode == 13 && e.target instanceof HTMLInputElement){
        addTodo(e.target.value);
        e.target.value = ''
      }
    }}/>
    {todos.map((todo, index : number) => <p key={index}>{todo} <button onClick={e => {
      deleteTodo(index)
    }}>X</button></p>)}
  </div>
)

function mapStateToProps(todos : State) : { todos: TodoList } {
  return {
    todos
  }
}

export default connect(mapStateToProps, { addTodo, deleteTodo})(Todos)
