import React from "react";
import Heading from "../../components/Heading";
import Party from "../../assets/Party Hall.jpg";
import dollar from "../../assets/icons/dollar2.svg";
import { rotateAnim } from "../../css/animations.module.css";

const PartyHall = () => {
	const beforeStyling = `before:absolute before:-z-10 before:h-[140%] before:w-[120%] 
	before:-translate-x-[5%] before:-translate-y-[10%] before:rounded-full before:bg-primary`;
	return (
		<section className="max-md:mb-36 max-sm:mb-0">
			<Heading title="Party Hall" />
			<div className="grid grid-cols-2 gap-12 max-md:grid-cols-1 ">
				<div className="image justify-self-center md:order-2">
					<img className="h-[80%] rounded-md object-cover max-sm:mx-auto max-sm:h-[70%]" src={Party} alt="" />
				</div>
				<div className="details justify-self-end max-md:mt-0 max-md:flex max-md:flex-col max-md:items-center max-md:justify-self-center  max-sm:-translate-y-24 md:order-1">
					<h2 className="text-xl font-semibold max-lg:text-[3rem] max-xs:text-[2.5rem]">
						Celebrate Moments Together
					</h2>
					<div className="process mt-24 flex w-[20rem] flex-col gap-24 before:-translate-x-[0.8rem] max-md:w-[25rem] ">
						<div className=" flex items-center gap-24">
							<div className={`image relative isolate ${beforeStyling} ${rotateAnim} `}>
								<img src={dollar} className="aspect-square w-[5.5rem] max-lg:w-[4.5rem] " />
							</div>
							<span className="ml-auto flex h-full w-fit  items-center justify-start text-md  font-normal">
								Reasonable price
							</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default PartyHall;
