const express = require('express');

const v1Router = require('./v1/routes'); 
const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || `http://localhost:${PORT}`;

const app = express();

app.use('/api/v1', v1Router);

app.listen(PORT, () => console.log(`App is running on: ${HOST}\n\nlistening on port: ${PORT}`));