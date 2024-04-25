import { Link, NavLink, Outlet } from "react-router-dom"
import "../index.css";


const Root = () => {
    
	return (
	<div className="app">

		<main>
			<Outlet />
		</main>

	</div>
	);
}


export default Root
