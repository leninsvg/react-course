import {AboutPage } from './pages/AboutPage';
import {
	Routes, Route, Navigate, Link
} from "react-router-dom";
import {HomePage} from './pages/HomePage';
import {LoginPage} from './pages/LoginPage';
import {Navbar} from './Navbar';
// const router = createBrowserRouter([
// 	{
// 		path: "/",
// 		element: <AboutPage></AboutPage>,
// 	},
// ]);

export const MainApp = () => {
	return (
		<>
			<h1>MainApp</h1>
			<Navbar></Navbar>
			<hr/>
			<Routes>
				<Route path={"/"} element={<AboutPage></AboutPage>}></Route>
				<Route path={"about"} element={<HomePage></HomePage>}></Route>
				<Route path={"login"} element={<LoginPage></LoginPage>}></Route>
				<Route path={"/*"} element={<Navigate to={'/about'}></Navigate>}></Route>
			</Routes>
		</>
	)
}