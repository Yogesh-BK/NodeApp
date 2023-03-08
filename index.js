const express = require('express');
const app = express();
app.get('/', (req, res) => {
	res.send('Hello World!');
});
app.listen(3000, () => {
	console.log('NOW RUNNING ON PORT 3000');
});
