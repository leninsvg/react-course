import {useGetTodoByIdQuery, useGetTodosQuery} from './store/apis/todosApi.js';
import {useState} from 'react';

export const TodoApp = () => {
	console.log('TodoApp')
	const [todoId, setTodoId] = useState(1)
	const {data: todo, isLoading} = useGetTodoByIdQuery(todoId)
	const nextTodo = () => {
		setTodoId(todoId + 1)
	}
	const previousTodo = () => {
		setTodoId(todoId - 1)
	}
	return (
		<>
			<div>Todos - RTK Query</div>
			<hr/>
			<h4>isLoading: {isLoading ? 'true' : 'false'}</h4>
			<pre>{JSON.stringify(todo)}</pre>
			{/*<ul>*/}
			{/*  {*/}
			{/*		todos.map(todo => (*/}
			{/*			<li key={todo.id}>*/}
			{/*				<strong>{todo.completed? 'DONE': 'PENDING'}</strong>*/}
			{/*				{todo.title}*/}
			{/*			</li>*/}
			{/*		))*/}
			{/*  }*/}
			{/*</ul>*/}
			<button onClick={previousTodo}>
				Previous Todo
			</button>
			<button onClick={nextTodo}>
				Next Todo
			</button>
		</>
	)
}