import {UserContext} from '../context/UserContext';
import {useContext} from 'react';
export const LoginPage = () => {
	const {user, setUser} = useContext(UserContext)
	return (
		<>
			<h1>LoginPage</h1>
			<hr/>
			<pre>
				{JSON.stringify(user, null, 2)}
			</pre>
			<button
				onClick={() => setUser({id: 123, name: "xxx", email: "lenin@sd.com"})}
				className={'btn btn-primary'}>
				Estableser usuario
			</button>
		</>
	)
}