import React, { useState } from "react";
import logo from "../assets/logo.png";
import { StyledUl } from "../css/styled-components/styled-components";
import { HiOutlineMenuAlt1, HiX } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";

const Nav = ({ handleToggleOffer }) => {
	let [openMenu, setOpenMenu] = useState(false);
	function toggleMenu() {
		setOpenMenu(prev => !prev);
	}
	return (
		<nav className="flex w-full items-center justify-between border-b  border-gray  py-4 max-md:py-0 max-sm:px-2 max-sm:py-0 ">
			<div className="image my-4 h-[6rem] shrink-0 translate-y-4 max-md:h-[5.5rem]">
				<NavLink to={"/"}>
					<img src={logo} className="h-full  -translate-y-3 max-md:h-[70%]" alt="Delicious Restaurant Logo" />
				</NavLink>
			</div>
			<div className={`toggle md:hidden `} onClick={toggleMenu}>
				<HiOutlineMenuAlt1 className="cursor-pointer text-[3rem]" />
			</div>
			<ul
				css={StyledUl}
				className={`gap-24 font-poppins text-lg font-[400] max-lg:gap-16 max-lg:text-md max-lg:font-medium max-md:z-10  ${
					!openMenu && "max-md:!hidden"
				} `}>
				<li className={`fixed right-0 top-0 self-end p-8 ${!openMenu ? "md:hidden" : ""}`}>
					<HiX
						className=" text-xl opacity-70 transition-all hover:opacity-100 md:hidden"
						onClick={toggleMenu}
					/>
				</li>
				{/* <li onClick={toggleMenu}>
					<Link to={`/`}>Home</Link>
				</li> */}
				<li onClick={toggleMenu}>
					<Link to={`/menu`}>Menu</Link>
				</li>
				<li
					onClick={() => {
						handleToggleOffer();
						toggleMenu();
					}}>
					Offers
				</li>
				<li onClick={toggleMenu}>
					<a href="#footer">Contact</a>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
