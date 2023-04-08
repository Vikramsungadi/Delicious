import React from "react";

const Heading = props => {
	const { title, description, children, className } = props;
	return (
		<div className={`${className ? className : ""} heading mb-36 text-center text-xl max-md:mb-20 `}>
			{title ? <h2 className="text-xl tracking-wide text-secondary max-sm:text-[3rem]">{title}</h2> : ""}
			{description ? <p className="text-base">{description}</p> : ""}
			{children}
		</div>
	);
};

export default Heading;
