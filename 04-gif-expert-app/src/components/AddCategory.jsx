import {useState} from 'react';

// eslint-disable-next-line react/prop-types
export const AddCategory = ({onNewCategory}) => {
	const [category, setCategory] = useState('')
	const addCategory = (event) => {
		event.preventDefault()
		if (!category.trim().length) {
			return;
		}
		onNewCategory(category);
		// setCategories(categories => [category, ...categories]);
		setCategory('');
	}
	return (
		<>
			<form onSubmit={(event) => addCategory(event)}>
				<input
					onChange={(event) => setCategory(event.target.value)}
					value={category}
					type={'text'}
					placeholder={'Search gifs'}
				/>
			</form>
		</>
	);
}
