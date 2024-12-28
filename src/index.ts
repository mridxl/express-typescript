import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.send('Hello, TypeScript with express + nodemon!');
});

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});

// Express server with TypeScript
// a template for building Node.js applications with TypeScript and Express, configured with nodemon for hot reloading.
