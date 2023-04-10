export const slideVariants = {
	hidden: {
		opacity: 0,
		x: "20vw",
	},
	visible: {
		opacity: 1,
		x: "0vw",
		transition: {
			type: "spring",
			duration: 0.5,
		},
	},
	// exit: { x: "-100vw" },
};

export const opacityVariants = {
	hide: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: { duration: 0.3 },
	},
};

export const slideFromTopVariants = {
	hide: {
		y: "-60vh",
		opacity: 0.4,
	},
	visible: {
		y: "0",
		opacity: 1,
		transition: { duration: 0.3 },
	},
};
