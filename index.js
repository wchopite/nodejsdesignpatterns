const express = require('express');
const services = require('./services');
const hanlify = require('./handlers');

const app = express();

// Global middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;

// handlers
const usersHandler = hanlify('users');
const postsHandler = hanlify('posts');

// user routes
app.get('/', usersHandler(services).get); // Dependency Injection. services in this case
app.post('/', usersHandler(services).post); // Dependency Injection. services in this case
app.put('/:id', usersHandler(services).put); // Dependency Injection. services in this case
app.delete('/:id', usersHandler(services).delete); // Dependency Injection. services in this case

// post routes
app.get('/posts', postsHandler(services).get); // Dependency Injection. services in this case

// Start server
app.listen(port, () => console.log(`Listening on port ${port}`));
