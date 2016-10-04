// @flow
import React from 'react'
import { connect } from 'react-redux'

const NewTodo = ({ onChange } : { onChange: ( event: any ) => void }) => (
  <div>
    <h3>New</h3>
    <input type="text" onKeyUp={onChange}/>
  </div>
)

export default NewTodo
