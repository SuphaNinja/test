const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json({ message: 'Hello from the server!' });
});

// Export the Express API
module.exports = app;