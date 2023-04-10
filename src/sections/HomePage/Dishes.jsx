import React, { Fragment, useRef } from "react";
import Card from "../../components/Card";
import Heading from "../../components/Heading";
import { css } from "@emotion/react";
import { DISH_DETAILS } from "../../constants/const-dishes";
import { CATEGORIES } from "../../constants/const-menu";
import { useInView, motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const Dishes = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { margin: "500px 0px 0px 0px" });

	const hideLast2 = css`
		a:nth-of-type(8) ~ a {
			display: none;
		}

		@media (max-width: 768px) {
			a:nth-of-type(6) ~ a {
				display: none;
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
				{CATEGORIES.map(({ name, image }) => (
					<Fragment key={name}>
						<NavLink to={"/menu"}>
							<Card className="dish-card" title={name} image={image} />
						</NavLink>
					</Fragment>
				))}
			</motion.div>
		</section>
	);
};

export default Dishes;
