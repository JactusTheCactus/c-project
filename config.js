const fs = require('fs');
const path = require('path');
/**
	@param {string} dir
	The Directory to start searching from.
	@param {RegExp} regex
	The `RegEx` pattern used to find Files & Directories.
	@param {string} baseDir
	The directory where the function starts.
	Not necessary in implementation;
	Only used in recursion.
	@returns {string[]}
	An `array` containing every File / Directory matching `regex`.
 */
function findFiles(dir, regex, baseDir = dir) {
	let results = [];
	const list = fs.readdirSync(dir, { withFileTypes: true });
	for (const entry of list) {
		const fullPath = path.join(dir, entry.name);
		const relativePath = path.relative(baseDir, fullPath);
		if (regex.test(entry.name)) {
			results.push(relativePath);
		}
		if (entry.isDirectory()) {
			results = results.concat(findFiles(fullPath, regex, baseDir));
		}
	}
	return results;
}
try {
	fs.writeFileSync(".gitignore", `${findFiles(
		".",
		new RegExp(
			[
				/test(?:\..*)?/,
				/\.vscode/
			]
				.join("|")
				.replace(/\//g, ""))
	).join("\n")}`);
} catch (err) {
	console.error("Error writing content to file:", err);
}
try {
	fs.writeFileSync(".editorconfig", [
		"root = true",
		"[*]",
		"insert_final_newline = false",
		"trim_trailing_whitespace = true",
		"indent_style = tab",
		"indent_size = 4",
		`[{${findFiles(
			".",
			new RegExp(
				[
					/Makefile/,
					/.*\.(?:js(?:on)?|c)/,
					/.*\.(?:cs)/
				]
					.join("|")
					.replace(/\//g, "")
			)
		).join(",")}}]`,
		"# Placeholder",
		"# No specific rules yet",
		`[{${findFiles(
			".",
			new RegExp(
				[
					/.*\.(?:ya?ml)/
				]
					.join("|")
					.replace(/\//g, "")
			)
		).join(",")}}]`,
		"# Set to match Yaml, but the project currently has none",
		"indent_style = space",
		"indent_size = 2",
	].join("\n"));
} catch (err) {
	console.error("Error writing content to file:", err);
}