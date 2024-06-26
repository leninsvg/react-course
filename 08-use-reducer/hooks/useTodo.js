import {todoReducer} from '../todo.reducer';
import {useReducer, useEffect} from 'react';

const initialState = []
const init = () => {
	return JSON.parse(localStorage.getItem('todos')) || [];
}
export const useTodo = () => {
	const [todos, dispatch] = useReducer(todoReducer, initialState, init)

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos))
	}, [todos]);

	const handleNewTodo = (todo) => {
		const action = {
			type: '[TODO] add todo', payload: todo
		};
		dispatch(action);
	}

	const handleDeleteTodo = (id) => {
		const action = {
			type: '[TODO] remove todo', payload: id
		}
		dispatch(action);
	}
	const handlerOnToggleTodo =(id) => {
		const action = {
			type: '[TODO] toggle todo', payload: id
		}
		dispatch(action);
	}
	return {
		todos,
		todosCount: todos.length,
		pendingTodosCount: todos.filter(todo => !todo.done).length,
		handleNewTodo,
		handleDeleteTodo,
		handlerOnToggleTodo
	}
}