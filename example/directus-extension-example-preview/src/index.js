export default {
	id: 'example-preview',
	handler: r => r.get('/', (_req, res) => res.send(/*html*/`
<!DOCTYPE html>
<html lang="en">
<head>
	<title>Example Preview</title>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<style></style>
</head>
<body>
	<pre>EMPTY</pre>
	<script>
	const elem = document.querySelector('pre');

	window.addEventListener("message", (event) => {
		const { type, values } = event.data;

		console.log('debug', { type, values });

		if (type === 'directus-preview') {
			elem.innerText = JSON.stringify(values, null, 2);
		}
	}, false);
	</script>
</body>
</html>
`)),
};
