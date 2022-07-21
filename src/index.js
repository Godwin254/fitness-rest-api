const { application } = require('express');
const express = require('express');
const PORT = process.env.PORT || 5000;

const app = express();

app.get('/gym-api', (req, res) => {
    res.send("<h1>Server Started Successfully</h1>");
})

app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));