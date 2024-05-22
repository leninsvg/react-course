import {UserContext} from './UserContext';
import {useState} from 'react';
// const user = {
// 	id: 123,
// 	email: 'test@test.com',
// 	name: 'test',
// }
export const UserProvider = ({children}) => {
	const [user, setUser] = useState()
  return(
		<>
			<UserContext.Provider value={{user, setUser}}>
				{children}
			</UserContext.Provider>
		</>
  )
}