module.exports = function(eleventyConfig) {

	eleventyConfig.addWatchTarget('./src/assets/');

  eleventyConfig.addPassthroughCopy({ './src/assets/images': 'images' });
	eleventyConfig.addPassthroughCopy('./src/assets/*.css');

	/**
	 * Enable quiet mode
	 */
	eleventyConfig.setQuietMode(true);

	/**
	 * Return the config to Eleventy
	 */
	return {
		dir: {
			input: 'src',
			output: 'dist',
			includes: 'includes',
			layouts: 'layouts',
		},
		passthroughFileCopy: true,
		templateFormats: ['njk', 'md', 'html', '11ty.js'],
		htmlTemplateEngine: 'njk',
		markdownTemplateEngine: 'njk',
	};
}