import { css } from "@emotion/react";

export const StyledUl = css`
	display: flex;
	align-items: center;
	cursor: pointer;
	@media (max-width: 768px) {
		position: fixed;
		inset: 0;
		padding: 4rem;
		height: 100dvh;
		height: 100vh;
		width: 100vw;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		background: rgba(0, 0, 0, 0.95);
	}

	li:not(:nth-of-type(1)) {
		position: relative;
		transition: all 0.3s ease;
		&::before {
			content: "";
			width: 100%;
			scale: 0;
			transform-origin: center;
			height: 2.5px;
			background-color: var(--secondary);
			position: absolute;
			transition: all 0.2s ease;
			bottom: -0.5rem;
		}
		&:hover {
			color: var(--secondary);
			&::before {
				scale: 1;
			}
		}
	}
`;

export const StyledButton = css`
	font-size: 2rem;
	font-weight: 600;
	padding: 0.4em 1.1em 0.5em;
	border-radius: 0.3rem;
	width: fit-content;
	box-shadow: var(--shadow-float);
	background-color: var(--primary);
	outline: 1px solid var(--secondary);
	transition: all 0.15s ease;
	@media (max-width: 640px) {
		padding: 0.3em 1em 0.4em;
	}
	a {
		padding: 0;
	}
	&:hover {
		background-color: var(--secondary);
		outline: 1px solid var(--primary);
		color: var(--primary);
	}
`;
