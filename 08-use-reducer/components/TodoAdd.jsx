import {useForm} from '../../05-hook-app/src/hooks';

export const TodoAdd = ({onNewTodo}) => {
	const {description, onInputChange, onResetForm} = useForm({
		description: '',

	})

	const onFormSubmit = (e) => {
		e.preventDefault();
		if(description.length <= 1){
			return;
		}
		const newTodo = {
			id: new Date().getTime(),
			description: description,
			doneL: false
		}
		onNewTodo(newTodo)
		onResetForm();
	}

	return (
		<>
			<form onSubmit={onFormSubmit}>
				<input type="text"
				       name={'description'}
				       value={description}
				       onChange={onInputChange}
				       placeholder="Que hay que hacer?"
				       className={'form-control'}/>
				<button type={'submit'}
				        className={'btn btn-outline-primary mt-1'}>
					Agregar
				</button>
			</form>
		</>
	);
}