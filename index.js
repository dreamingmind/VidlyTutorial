const express = require('express');
const api_routes = require('./routes/ApiRoutes');

const app = express();

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

app.use('/api/', api_routes);

app.listen(PORT, () => {
    console.log(`Running on http://${HOST}:${PORT}`);
});

