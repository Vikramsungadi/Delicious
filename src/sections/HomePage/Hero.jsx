import React from "react";
import Dish from "../../assets/hero/dish.png";
import Plain from "../../assets/hero/plain.png";
import { rotateAnim2, startAnim } from "../../css/animations.module.css";
import { StyledButton } from "../../css/styled-components/styled-components";
import { Link } from "react-router-dom";
const Hero = () => {
	return (
		<section className="grid grid-cols-[40%_1fr] items-center justify-center transition-all duration-150  max-md:grid-cols-1 ">
			<div className="left-section flex w-[95%] flex-col gap-16 max-md:mx-auto max-md:w-[90%] max-md:items-center max-md:justify-center max-md:text-center">
				<h1 className="text-2xl max-lg:text-[4rem] max-sm:text-xl max-xs:text-[3rem]">
					Discover your favourite food and
					<span className=" text-secondary"> Enjoy with Family</span>
				</h1>
				<p className="text-base max-lg:text-[1.4rem]">
					“We welcome your appetite. Let our food satisfy your stomach.”
				</p>
				<Link css={StyledButton} className={`${startAnim} btn`} to={"/menu"}>
					Menu
				</Link>
			</div>
			<div className="right-section translate-x-[4rem]  max-md:my-16 max-sm:translate-x-[0.8rem]">
				<div className="image relative w-full">
					<img
						src={Dish}
						className={`${rotateAnim2} absolute left-1/3 top-[7.5%] aspect-square h-[80%] max-h-fit`}
						alt="A plate full of delicious food"
					/>
					<img src={Plain} alt="Tasty delicious food in a plate" />
				</div>
			</div>
		</section>
	);
};

export default Hero;
