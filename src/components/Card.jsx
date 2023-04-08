import { motion } from "framer-motion";
import React from "react";

const Card = props => {
	const { image, title, className } = props;
	return (
		<motion.div
			className={`${className} group flex cursor-pointer flex-col items-center rounded-lg border border-solid border-gray px-4 py-12 text-center transition-all duration-200 hover:-translate-y-2 hover:border-secondary hover:shadow-float`}>
			<div className="image flex aspect-square w-[17rem] items-center max-md:w-[13.5rem]">
				<img
					src={image}
					className="relative origin-center object-cover transition-all duration-500 group-hover:scale-105  max-md:-translate-x-1"
					alt={title}
				/>
			</div>
			<h3 className="title pt-4 text-base group-hover:text-secondary ">{title}</h3>
		</motion.div>
	);
};

export default Card;
