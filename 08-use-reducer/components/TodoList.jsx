import {TodoItem} from './TodoItem';

export const TodoList = ({todos = [], onDeleteTodo, onToggleTodo}) => {
	return (
		<>
			<ul className={'list-group'}>
				{
					todos.map((todo, index) => (
						// TodoItem
						<TodoItem key={todo.id} todo={todo} onDeleteTodo={onDeleteTodo} onToggleTodo={onToggleTodo}></TodoItem>
					))
				}
			</ul>
		</>
	)
}