import React from "react";
import { shakeAnim, moveAnim, rotateAnim } from "../../css/animations.module.css";
import delivery from "../../assets/icons/Delivery Guy.svg";
import truck from "../../assets/icons/truck.svg";
import dollar from "../../assets/icons/dollar2.svg";
import phone from "../../assets/icons/phone.svg";
import Heading from "../../components/Heading";

const Delivery = () => {
	const details = [
		{ image: phone, desc: "Order", animation: shakeAnim },
		{ image: truck, desc: "Delivery", animation: moveAnim },
		{ image: dollar, desc: "Payment", animation: rotateAnim },
	];
	const beforeStyling = `before:absolute before:-z-10 before:h-[140%] before:w-[120%] 
	before:-translate-x-[10%] before:-translate-y-[10%]before:rounded-full before:bg-primary`;

	return (
		<section className="max-md:mb-36 max-sm:mb-0">
			<Heading title="Door Delivery" description="We deliver orders within 5kms" />
			<div className="grid grid-cols-2 gap-12 max-md:grid-cols-1 ">
				<div className="image aspect-square justify-self-center">
					<img className="h-full max-sm:mx-auto max-sm:h-[70%]" src={delivery} alt="" />
				</div>
				<div className="details max-md:mt-0 max-md:flex max-md:flex-col max-md:items-center  max-md:justify-self-center max-sm:-translate-y-24">
					<h2 className="text-xl font-semibold max-lg:text-[3rem] max-xs:text-[2.5rem]">
						Free Door Delivery upto 5km
					</h2>
					<div className="process mt-24 flex w-[20rem] flex-col gap-24  max-md:w-[25rem] ">
						{details.map(({ image, desc, animation }) => (
							<div key={desc} className=" flex items-center gap-8">
								<div className={`image relative isolate ${beforeStyling} ${animation}`}>
									<img src={image} className="aspect-square w-[5.5rem] max-lg:w-[4.5rem] " alt={desc} />
								</div>
								<span className="ml-auto flex h-full w-[8rem] items-center justify-start text-md  font-normal">
									{desc}
								</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Delivery;
