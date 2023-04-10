import Hero from "./Hero";
import Dishes from "./Dishes";
import Delivery from "./Delivery";
import PartyHall from "./PartyHall";
import { motion } from "framer-motion";
import { slideVariants } from "../../components/framer-animations";

function Index() {
	return (
		<motion.main variants={slideVariants} exit="exit" initial="hidden" animate="visible">
			<Hero />
			<Dishes />
			<Delivery />
			<PartyHall />
		</motion.main>
	);
}

export default Index;
