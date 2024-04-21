// @ts-check

/** @type {import("prettier").Config} */
const config = {
	trailingComma: "es5",
	tabWidth: 2,
	semi: true,
	singleQuote: false,
	bracketSpacing: true,

	plugins: ["prettier-plugin-jinja-template"],
	overrides: [
		{
			files: "*.webc",
			options: { parser: "html" },
		},
		{
			files: ["*.njk"],
			options: {
				parser: "jinja-template",
			},
		},
	],
};

export default config;
