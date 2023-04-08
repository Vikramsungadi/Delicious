import React from "react";
import logo from "../assets/logo.png";
import Dialer from "../assets/icons/phone.svg";
import { Link } from "react-router-dom";

const Footer = () => {
	const borderGray = " border-solid border-gray";

	const liStyles =
		"opacity-[0.65] transition-all text-[1.8rem] max-sm:text-base cursor-pointer duration-150 hover:text-secondary hover:opacity-100";

	const contact = [
		{ name: "Pavan", phone: "9494441566" },
		{ name: "Vijay", phone: "8919575212" },
		{ name: "Unknown", phone: "6305532326" },
	];
	return (
		<footer id="footer" className={`${borderGray}  border-t`}>
			<div className="mx-16 grid grid-cols-[repeat(auto-fit,minmax(auto,30rem))] justify-between gap-y-20 pb-[1.5rem] pt-[3rem] max-md:gap-y-10  max-sm:mx-0 max-sm:ml-8">
				<div className="restaurant">
					<div className="flex flex-col items-start justify-between gap-4">
						<img
							src={logo}
							alt="Restaurant Logo"
							className="h-full max-h-[7rem] shrink-0 object-contain max-md:max-h-[5rem]"
						/>
						<p
							className={`max-w-[25rem] border-t text-base opacity-[0.65] max-md:text-[1.4rem] ${borderGray}`}>
							NH-42, Ananthapuramu Road <br />
							Near Nayara Petrol bunk <br />
							Bathalaplli.
						</p>
					</div>
				</div>
				<div className="quick-links w-full max-w-[15rem]  max-md:max-w-full">
					<ul className="flex flex-col  gap-8 max-sm:w-fit max-sm:gap-3">
						<li className="border-b border-gray pb-2 text-base font-semibold first-of-type:translate-y-2">
							Quick Links
						</li>
						<Link to={"/"} className={liStyles}>
							Home
						</Link>
						<Link to={"/menu"} className={liStyles}>
							Menu
						</Link>
						{/* <Link className={liStyles}>Catering</Link> */}
					</ul>
				</div>
				<div className="contact w-full max-w-[15rem] max-md:max-w-full">
					<ul className="flex flex-col gap-8 max-sm:w-fit max-sm:gap-6">
						<li className="border-b border-gray pb-2 text-base font-semibold  first-of-type:translate-y-2">
							Contact
						</li>
						{contact.map(({ phone }) => (
							<li key={phone}>
								<a
									className="flex items-center gap-4 text-base opacity-[0.65] transition-all hover:text-secondary hover:opacity-100 max-sm:text-sm"
									href={`tel:+91-${phone.substring(0, 3)}-${phone.substring(3, 6)}-${phone.substring(6)}`}>
									<span>
										<img src={Dialer} className="w-12 max-sm:w-10" alt="" />
									</span>
									{phone}
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
