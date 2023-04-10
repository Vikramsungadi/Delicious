import { HiX } from "react-icons/hi";
import React from "react";
import { offerDetails } from "../constants/const-offers.jsx";
import { motion } from "framer-motion";
import { opacityVariants, slideFromTopVariants } from "../components/framer-animations.jsx";

const Offer = ({ handleToggleOffer }) => {
	return (
		<motion.div
			variants={opacityVariants}
			initial="hide"
			animate="visible"
			exit="hide"
			className="fixed inset-0 z-30 flex h-screen w-screen justify-center bg-[rgba(20,20,20,0.95)]">
			<motion.div
				variants={slideFromTopVariants}
				className="offer-wrapper justify-center-center relative inset-0  mt-36 flex h-fit w-fit flex-col justify-start rounded-md border border-gray bg-primary p-12 pr-48 max-sm:m-4 max-sm:mt-24 max-sm:justify-center   max-sm:px-8">
				<HiX
					className="absolute right-0 top-0 m-4 cursor-pointer rounded-full  text-[3rem] opacity-50 transition-all  hover:opacity-100"
					onClick={handleToggleOffer}
				/>
				<h2 className="mb-8 self-center text-xl text-secondary">Offers</h2>

				{offerDetails.map(({ name, offers }) => (
					<div key={name} className="offer mb-16">
						<ul>
							<li className="relative mb-2 w-fit border-b border-red-500 py-[0.1rem] text-md text-secondary max-sm:text-base">
								{name}
							</li>

							{offers.map(offer => (
								<li key={offer} className="translate-x-6 list-disc text-base max-sm:text-sm">
									{offer}
								</li>
							))}
						</ul>
					</div>
				))}
			</motion.div>
		</motion.div>
	);
};

export default Offer;
