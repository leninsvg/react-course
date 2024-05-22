import {UserContext} from '../context/UserContext';
import {useContext} from 'react';

export const HomePage = () => {
	const context = useContext(UserContext)
	return (
		<>
			<h1>HomePage <small>{context.user?.email}</small></h1>
			<hr/>
			<pre>
				{JSON.stringify(context.user, null, 2)}
			</pre>
		</>
	)
}