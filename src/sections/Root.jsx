import Nav from "./Nav";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Homepage() {
	return (
		<>
			<Nav />
			<Outlet />
			<Footer />
		</>
	);
}

export default Homepage;
