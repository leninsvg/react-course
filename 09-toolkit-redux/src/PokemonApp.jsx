import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getPokemons} from './store/slices/pokemon/index.js';

export const PokemonApp = () => {
	const dispatch = useDispatch();
	const {isLoading, pokemons, page} = useSelector((state) => state.pokemon);
	useEffect(() => {
		dispatch(getPokemons())
	}, []);
	return (
		<>
			<h1>Pokemon App</h1>
			<span>Loading: {isLoading ? 'true' : 'false'}</span>
			<hr/>
			<ul>
				{
					pokemons.map(({name}, index) => <li key={index}>
						{name}
					</li>)
				}
			</ul>
			<button
				disabled={isLoading}
				onClick={() => dispatch(getPokemons(page))}
			>
				Next
			</button>
		</>
	)
}