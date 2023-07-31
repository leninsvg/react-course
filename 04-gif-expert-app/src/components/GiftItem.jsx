import {GiftItemDetail} from './GiftItemDetail.jsx';
import {useFetchGifs} from '../hooks/useFetchGifs.js';

// eslint-disable-next-line react/prop-types
export const GiftItem = ({category}) => {
	const {images, isLoading} = useFetchGifs(category);
	return (
		<>
			<h3>{category}</h3>
			{
				isLoading && (<h2>{!isLoading ? 'Cargando...' : ''}</h2>)
			}
			<div className={'card-grid'}>
				{
					images.map((image) => (
						<GiftItemDetail key={image.id} {...image}></GiftItemDetail>
					))
				}
			</div>
		</>
	)
}
