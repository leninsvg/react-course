import React from 'react';
import {TodoAdd} from './components/TodoAdd';
import {TodoList} from './components/TodoList';
import {useTodo} from './hooks/useTodo';


export const TodoApp = () => {
	const {
		todos,
		todosCount,
		pendingTodosCount,
		handlerOnToggleTodo,
		handleDeleteTodo,
		handleNewTodo
	} = useTodo()
	return (<>
		<h1>TodoApp {todosCount}, <small>pendientes: {pendingTodosCount}</small></h1>
		<hr/>
		<div className={'row'}>
			<div className={'col-7'}>
				<TodoList
					todos={todos}
					onDeleteTodo={handleDeleteTodo}
					onToggleTodo={handlerOnToggleTodo}
				></TodoList>
			</div>
			<div className={'col-5'}>
				<h4>Agregar TODO</h4>
				<hr/>
				<TodoAdd onNewTodo={handleNewTodo}></TodoAdd>
			</div>
		</div>
	</>)
}