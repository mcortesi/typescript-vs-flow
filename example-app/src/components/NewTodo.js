// @flow

import React from 'react'
import { connect } from 'react-redux'

function NewTodo({ onChange } : { onChange: ( event: Event ) => void }) {
  return (
  <div>
    <h3>New</h3>
    <input type="text" onKeyUp={onChange}/>
  </div>
  )
}

export default NewTodo
