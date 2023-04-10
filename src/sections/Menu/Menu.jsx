import { useState, useEffect, Fragment } from "react";

import Heading from "../../components/Heading";
import { MENU, CATEGORIES } from "../../constants/const-menu";
import { inputStyles, itemStyles, categoryHeading } from "./menu-styles";
import { Lower } from "../../utils/utils";
import { css } from "@emotion/react";
import { motion } from "framer-motion";
import { slideVariants } from "../../components/framer-animations";

const dropdownStyles = css`
	-ms-overflow-style: none;
	scrollbar-width: none;
	margin-bottom: 0.5rem;

	&::-webkit-scrollbar {
		display: none;
	}
`;

const Menu = () => {
	let [selectedCategory, setSelectedCategory] = useState(["biryani", "biryani family pack"]);
	let [searchTerm, setSearchTerm] = useState("");
	let notSearched = !searchTerm;

	let FilteredMenu = [];

	let categories;
	function handleIndicator(e) {
		categories.forEach(c => {
			let target = c.childNodes[0].classList;
			if (target.contains("border-secondary")) {
				target.toggle("border-secondary");
				target.toggle("border-[3px]");
			}
		});
		e.target.childNodes[0].classList.toggle("border-secondary");
		e.target.childNodes[0].classList.toggle("border-[3px]");
	}
	useEffect(() => {
		categories = document.querySelectorAll("[data-category]");
	}, [selectedCategory]);

	if (notSearched) {
		for (let item of selectedCategory) {
			MENU.forEach(menu => {
				if (Lower(item) === Lower(menu.category)) {
					FilteredMenu.push(menu);
				}
			});
		}
	} else {
		MENU.forEach(data => {
			let { id, category, items } = data;
			let filteredArr = items.filter(({ item }) => Lower(item).includes(Lower(searchTerm)));
			if (filteredArr.length !== 0) FilteredMenu.push({ id, category, items: filteredArr });
		});
	}

	function updateSelectedCategory(e) {
		let selectedCategory = e.target.attributes.value.value;
		let [{ sub }] = CATEGORIES.filter(({ category }) => Lower(category) === Lower(selectedCategory));

		setSelectedCategory(sub);
		setSearchTerm("");
	}

	function handleSearch(e) {
		setSearchTerm(e.target.value);
	}

	return (
		<motion.div
			className="flex flex-col items-center"
			variants={slideVariants}
			initial="hidden"
			animate="visible">
			<Heading className="mb-10 mt-10 max-md:mb-6" title="Menu" description="We know what you love" />
			<div className="input flex flex-col items-center justify-center max-md:w-[95%] lg:w-[70%]">
				<input
					css={inputStyles}
					className="w-full"
					onInput={handleSearch}
					placeholder="Search Dish"
					type="text"
					value={searchTerm}
				/>
				{/* CATEGORIES */}
				<div css={dropdownStyles} className="dropdowns flex w-full gap-6 self-start overflow-x-scroll ">
					{CATEGORIES.map(({ category, image, name }) => (
						<div
							key={name}
							className="image group flex shrink-0 cursor-pointer flex-col items-center justify-center "
							data-category
							onClick={e => {
								updateSelectedCategory(e);
								handleIndicator(e);
							}}
							value={category}>
							<img
								src={image}
								alt={category}
								className="pointer-events-none aspect-square w-20 rounded-full border border-gray object-cover group-hover:border-[3px] group-hover:border-secondary lg:w-24"
							/>
							<p className="pointer-events-none mt-2 text-[1rem] md:text-xs">{name}</p>
						</div>
					))}
				</div>
			</div>
			{/* MENU */}
			<div className="menu mb-16 flex py-10 max-md:w-[95%] max-sm:max-h-full  max-sm:px-4 max-sm:py-2 lg:w-[70%]">
				<ul
					css={itemStyles}
					className=" grid h-full grid-rows-[repeat(auto-fill,minmax(fit-content,auto))]  gap-4 gap-x-24 max-sm:flex max-sm:flex-col   ">
					{FilteredMenu.map(({ category, items, id: categoryId }) => (
						<Fragment key={categoryId}>
							<motion.li
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								className="category col-span-2 flex items-center text-lg text-primary"
								css={categoryHeading}>
								{category}
							</motion.li>
							{items.map(({ item, price, id }) => (
								<li
									key={id}
									className=" cursor-pointer transition-all duration-75 hover:translate-x-2 hover:scale-[1.02] hover:text-secondary">
									<h3>{item}</h3> <span>{price.length != 5 ? price : `${" " + price}`}</span>
								</li>
							))}
						</Fragment>
					))}
				</ul>
			</div>
		</motion.div>
	);
};

export default Menu;
