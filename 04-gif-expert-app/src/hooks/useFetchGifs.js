import {useEffect, useState} from 'react';
import {getGifts} from '../helpers/gifts.js';

export const useFetchGifs = (category) => {
	const [images, setImages] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const getImages = async () => {
		const auxImages = await getGifts(category);
		setImages([...auxImages]);
		setIsLoading(false);
	}
	useEffect(() => {
		getImages().then();
	}, [])
	return{
		images,
		isLoading
	}
}

