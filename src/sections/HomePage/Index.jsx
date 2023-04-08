import Hero from "./Hero";
import Dishes from "./Dishes";
import Delivery from "./Delivery";
import { motion } from "framer-motion";

function Index() {
	let variants = {
		hidden: {
			opacity: 0,
			x: "20vw",
		},
		visible: {
			opacity: 1,
			x: "0vw",
			transition: {
				type: "spring",
				duration: 0.5,
			},
		},
		// exit: { x: "-50vw" },
	};
	return (
		<motion.main variants={variants} exit="exit" initial="hidden" animate="visible">
			<Hero />
			<Dishes />
			<Delivery />
		</motion.main>
	);
}

export default Index;
