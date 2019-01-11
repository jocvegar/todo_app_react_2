import React from 'react';
const NewTodoForm = (props) => {
	return(
		<form onSubmit={props.formSubmit}>
		  <label htmlFor="newTodo">New ToDo</label>
		  <input
		    type="text"
		    id="newTodo"
		    name="newTodo"
		    value={props.newTodo}
		    onChange={props.newTodoChange} />
		  <button type="submit">Add ToDo</button>
		</form>
	);
}

export default NewTodoForm;
