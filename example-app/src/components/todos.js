// @flow

import myPng from './../img/60x60.png';

import * as Immutable from 'immutable';
import React from 'react'
import { connect } from 'react-redux'

import NewTodo from './NewTodo'
import { addTodo, deleteTodo } from '../modules/todos'

import type { AddTodoAD, DeleteTodoAD } from '../modules/todos';

type TodoProps = { todos: Immutable.List<string> , addTodo : AddTodoAD, deleteTodo: DeleteTodoAD }

function Todos({ todos, addTodo, deleteTodo } : TodoProps ){
  return (
    <div>
      <h1>Todos</h1>
      <img src={myPng}/>
      <NewTodo onChange={e => {
        const target : EventTarget = e.target;

        if(e.keyCode == 13 && target instanceof HTMLInputElement){
         addTodo(target.value);
         target.value = '';
        }

      }}/>
      {todos.map((todo, index) => <p key={index}>{todo} <button onClick={e => {
        deleteTodo(index)
      }}>X</button></p>)}
    </div>
  )
}

function mapStateToProps(todos : Immutable.List<string>) {
  return {
    todos
  }
}

export default connect(mapStateToProps, { addTodo, deleteTodo })(Todos)
