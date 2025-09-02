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
[
	[
		"test.editorconfig",
		[
			/Makefile/,
			/.*\.(?:js(?:on)?|c)/
		],
		""
	],
	[
		".gitignore",
		[
			/test(?:\..*)?/,
			/\.vscode/
		],
		"\n"
	]
].forEach(config => {
	try {
		fs.writeFileSync(config[0], `${findFiles(
			".",
			new RegExp(
				config[1]
					.join("|")
					.replace(/\//g, ""))
		).join(config[2])}`);
	} catch (err) {
		console.error(`Error writing content to ${config[0]}:`, err);
	}
});