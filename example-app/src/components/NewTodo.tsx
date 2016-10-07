import * as React from 'react'
import EventHandler = React.EventHandler;
import KeyboardEvent = React.KeyboardEvent;

type NewTodoProps = { onChange: EventHandler<KeyboardEvent<HTMLInputElement>> }

const NewTodo = ({onChange } : NewTodoProps) => (
  <div>
    <h3>New</h3>
    <input type="text" onKeyUp={onChange}/>
  </div>
)

export default NewTodo
