// @ts-check
import pluginWebC from "@11ty/eleventy-plugin-webc";
import yaml from "js-yaml";
import { cssTransforms, htmlTransforms } from "./eleventy/transforms.js";

const INPUT_DIR = "src";
const OUTPUT_DIR = "dist";
export default function (eleventyConfig) {
	eleventyConfig.addDataExtension("yml,yaml", (contents) =>
		yaml.load(contents)
	);

	eleventyConfig.addPlugin(pluginWebC, {
		components: "src/_components/**/*.webc",
	});

	eleventyConfig.addPlugin(htmlTransforms);
	eleventyConfig.addPlugin(cssTransforms);

	// Copy files static files
	eleventyConfig.addPassthroughCopy({ [`${INPUT_DIR}/public`]: "." });

	return {
		dir: { input: INPUT_DIR, output: OUTPUT_DIR },
	};
}
