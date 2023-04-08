import { Routes, Route, useLocation } from "react-router-dom";
import Homepage from "./sections/Homepage/Index";
import Menu from "./sections/Menu/Menu";
import Nav from "./sections/Nav";
import Footer from "./sections/Footer";
import { AnimatePresence } from "framer-motion";

// const router = createBrowserRouter([
// 	{
// 		path: "/",
// 		element: <Root />,
// 		children: [
// 			{
// 				path: "/",
// 				element: <Homepage />,
// 			},
// 			{
// 				path: "/menu",
// 				element: <Menu />,
// 			},
// 		],
// 	},
// ]);
{
	/* <AnimatePresence mode="wait">
	<RouterProvider router={router} />
</AnimatePresence> */
}

function App() {
	let location = useLocation();
	return (
		<>
			<Nav />
			<AnimatePresence mode="wait">
				<Routes location={location} key={location.pathname}>
					<Route path="/" element={<Homepage />} />
					<Route path="/menu" element={<Menu />} />
				</Routes>
			</AnimatePresence>
			<Footer />
		</>
	);
}

export default App;
