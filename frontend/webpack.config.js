module.exports = {
	resolve: {
		alias: {
			path: require.resolve("path-browserify")
		}
	},
	define: {
		'process.platform': JSON.stringify(process.platform)
	}
}