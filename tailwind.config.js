/** @type {import('tailwindcss').Config} */
// const defaultTheme = require("tailwindcss/defaultTheme");
import defaultTheme from "tailwindcss/defaultTheme";

export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontSize: {
			xs: [
				"1.2rem",
				{
					lineHeight: "2rem",
					fontWeight: "400",
				},
			],
			sm: [
				"1.4rem",
				{
					lineHeight: "2.7rem",
					fontWeight: "400",
				},
			],
			base: [
				"1.6rem",
				{
					lineHeight: "3.2rem",
					fontWeight: "400",
				},
			],
			md: [
				"1.8rem",
				{
					lineHeight: "2.23rem",
					fontWeight: "700",
				},
			],
			lg: [
				"2rem",
				{
					lineHeight: "2.66rem",
					fontWeight: "700",
				},
			],
			xl: [
				"3.6rem",
				{
					lineHeight: "4.78rem",
					fontWeight: "700",
				},
			],
			"2xl": [
				"4.8rem",
				{
					lineHeight: "6.3rem",
					fontWeight: "700",
				},
			],
		},
		fontFamily: {
			inter: "Inter",
			roboto: "Roboto",
			poppins: "Poppins,Segoe UI",
		},
		screens: {
			xs: "400px",
			...defaultTheme.screens,
		},
		extend: {
			boxShadow: {
				float: "var(--shadow-float)",
			},
			colors: {
				primary: "var(--primary)",
				secondary: "var(--secondary)",
				gray: "var(--gray)",
			},
		},
	},
	plugins: [],
};
