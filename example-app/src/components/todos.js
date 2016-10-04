// @flow

import React from 'react'
import { connect } from 'react-redux'

import NewTodo from './NewTodo'
import { addTodo, deleteTodo } from '../modules/todos'



function Todos({todos, dispatch}){
  return (
    <div>
      <h1>Todos</h1>
      <NewTodo onChange={e => {
        const target : EventTarget = e.target;

        if(e.keyCode == 13 && target instanceof HTMLInputElement){
         dispatch(addTodo(target.value));
         target.value = '';
        }

      }}/>
      {todos.map((todo, index) => <p key={index}>{todo} <button onClick={e => {
        dispatch(deleteTodo(index))
      }}>X</button></p>)}
    </div>
  )
}

function mapStateToProps(todos) {
  return {
    todos
  }
}

export default connect(mapStateToProps)(Todos)
