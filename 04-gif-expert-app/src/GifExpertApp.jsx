import {useState} from "react";
import {AddCategory, GiftItem} from './components/index.js';

export const GifExpertApp = () => {
	// eslint-disable-next-line no-unused-vars
	const [categories, setCategories] = useState(['One Punch', 'Dragon Ball'])
	const addCategory = (category) => {
		if (categories.includes(category)) {
			return;
		}
		setCategories([category, ...categories]);
	}
	return (
		<>
			<h1>GifExpertApp</h1>
			<AddCategory
				onNewCategory={category => addCategory(category)}
			></AddCategory>
			{
				categories.map(category =>
					<GiftItem key={category} category={category}></GiftItem>)
			}
		</>
	)
}
