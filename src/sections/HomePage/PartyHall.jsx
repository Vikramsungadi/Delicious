import React from "react";
import Heading from "../../components/Heading";
import Party from "../../assets/Party Hall.jpg";
import Dining from "../../assets/Dining hall.jpg";

const PartyHall = () => {
	return (
		<section className="max-md:mb-36 max-sm:mb-0">
			<Heading title="Party & Dining Hall" description="Celebrate Moments Together" />
			<div className="grid grid-cols-2 gap-12 max-md:grid-cols-1">
				<div className="image justify-self-center md:order-2">
					<img
						className="mx-auto h-[80%] rounded-md object-cover max-sm:mx-auto max-sm:h-[70%]"
						src={Dining}
						alt="Dining Hall"
					/>
					<p className="mx-auto w-fit text-base italic">Dining Hall</p>
				</div>

				<div className="image justify-self-center md:order-2">
					<img
						className="mx-auto h-[80%] rounded-md object-cover max-sm:mx-auto max-sm:h-[70%]"
						src={Party}
						alt="Party Hall"
					/>
					<p className="mx-auto w-fit text-base italic">Party Hall</p>
				</div>
			</div>
		</section>
	);
};

export default PartyHall;
