import React, { Fragment, useRef } from "react";
import Card from "../../components/card";
import Heading from "../../components/Heading";
import { css } from "@emotion/react";
import { DISH_DETAILS } from "../../constants/const-dishes";
import { useInView, motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const Dishes = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { margin: "500px 0px 0px 0px" });

	const hideLast2 = css`
		@media (max-width: 768px) {
			.card-dish {
				&:nth-of-type(7) {
					display: none;
				}
				&:nth-of-type(8) {
					display: none;
				}
			}
		}
	`;

	const inViewStyles = isInView ? `opacity-100 duration-300 ` : "opacity-0 ";

	return (
		<section>
			<Heading title="Our Delicious Dishes" />
			<motion.div
				ref={ref}
				css={hideLast2}
				className={`${inViewStyles} dishes max-md: mx-auto grid max-w-[90%]  grid-cols-[repeat(auto-fit,minmax(27rem,auto))]  justify-center gap-x-6 gap-y-12  transition-all duration-150 max-md:grid-cols-2`}>
				{DISH_DETAILS.map(({ item, image }) => (
					<Fragment key={item}>
						<NavLink to={"/menu"}>
							<Card className="dish-card" title={item} image={image} />
						</NavLink>
					</Fragment>
				))}
			</motion.div>
		</section>
	);
};

export default Dishes;
