import { css } from "@emotion/react";

export const inputStyles = css`
	border: none;
	background: var(--gray);
	border-radius: 0.5rem;
	height: 3rem;
	font-size: 2rem;
	/* width: 70%; */
	padding: 2.5rem 1.5rem;
	margin-bottom: 5rem;

	@media (max-width: 768px) {
		height: auto;
		padding: 1.2rem 1.8rem;
		font-size: 1.6rem;
		margin-bottom: 2rem;
	}
	@media (max-width: 640px) {
		height: auto;
		padding: 1.2rem 1.5rem;
		font-size: 1.4rem;
		margin-bottom: 2rem;
	}
	&:focus {
		outline: 1px solid var(--secondary);
	}
`;
export const categoryHeading = css`
	position: relative;
	background: var(--secondary);
	width: 100%;
	padding: 0 10rem 0 1rem;
	margin: 2rem 0 1rem 0;
	border: 1px solid var(--gray);

	&::before {
		content: "";
		position: absolute;
		right: -1px;
		top: 0;
		width: 0;
		height: 0;
		border: 1.4rem solid transparent;
		border-left: 0;
		border-right: 1.2rem solid var(--primary);
	}
`;

export const itemStyles = css`
	width: fit-content;
	li {
		width: 100%;
		display: flex;
		justify-content: space-between;
		font-size: 1.6rem;
		margin-right: 8rem;
		@media (max-width: 768px) {
			font-size: 1.3rem;
		}

		span {
			&::before {
				content: "-";
				position: relative;
				right: 3rem;
			}
		}
		&:last-child {
			margin-bottom: 2rem;
		}
	}
`;

export const optionStyles = css`
	background-color: var(--primary);
	border: 1px solid var(--gray);
	padding: 0.5rem 1.2rem 0.7rem;
	border-radius: 3px;
	margin-right: 2rem;
	@media (max-width: 768px) {
		font-size: 1.4rem;
	}
	@media (max-width: 640px) {
		align-self: self-start;
		margin-bottom: 1rem;
	}
	&:focus {
		outline: 1px solid var(--secondary);
	}
	option {
		background: transparent;
		position: relative;
		isolation: isolate;

		&:before {
			content: "";
			position: absolute;
			inset: 0;
			width: 100%;
			height: 100%;
			background-color: red;
			z-index: 10;
		}
		&:hover,
		&:focus,
		&:checked {
			background-color: var(--gray);
		}
	}
`;
