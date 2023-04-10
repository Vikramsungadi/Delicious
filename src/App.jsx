import { Routes, Route, useLocation } from "react-router-dom";
import Homepage from "./sections/HomePage/HomePage";
import LogoD from "./assets/Logo D.png";
import Menu from "./sections/Menu/Menu";
import Nav from "./sections/Nav";
import Footer from "./sections/Footer";
import Offer from "./sections/Offer";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { blinkAnim } from "./css/animations.module.css";

function App() {
	let location = useLocation();
	let [isLoading, setIsLoading] = useState(true);
	let [offerModal, setOfferModal] = useState(false);

	function handleToggleOffer() {
		setOfferModal(prev => !prev);
	}

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 800);
	}, []);

	useEffect(() => {
		setTimeout(() => {
			handleToggleOffer();
		}, 2800);
	}, []);

	if (isLoading) {
		return (
			<div className="fixed  flex h-screen w-screen items-center justify-center">
				<div
					className={`${blinkAnim} aspect-square w-1/4 origin-center -translate-x-[25%] max-md:w-1/3 max-md:-translate-x-[10%]`}>
					<motion.img src={LogoD} className="w-full" alt="Logo" />
				</div>
			</div>
		);
	}
	return (
		<>
			<AnimatePresence mode="wait">
				{offerModal && <Offer handleToggleOffer={handleToggleOffer} />}
			</AnimatePresence>
			<Nav handleToggleOffer={handleToggleOffer} />
			<Routes location={location} key={location.pathname}>
				<Route path="/" element={<Homepage />} />
				<Route path="/menu" element={<Menu />} />
			</Routes>
			<Footer handleToggleOffer={handleToggleOffer} />
		</>
	);
}

export default App;
