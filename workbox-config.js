module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{jfif,png,html,json,js,css}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};