const pa11y = require(`pa11y`),
	fs = require(`file-system`);

pa11y(`http://localhost:1234`, {
	screenCapture: `${__dirname}/results/index.png`,
	viewport: {
		width: 320,
		height: 480,
		isMobile: true
	},
	standard: `WCAG2AAA`,
	actions: [
		`screen capture ${__dirname}/results/index_start.png`,
		`set field textarea[name="notes"] to notes`
	]
})
	.then((res) => {
		fs.writeFile(
			`tests/pa11y/results/index.json`,
			JSON.stringify(res, null, `\t`)
		);
	})
	.catch((err) => console.log(err));
