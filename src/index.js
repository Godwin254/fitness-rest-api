const express = require('express');
 
const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || `http://localhost:${PORT}`;

const v1WorkoutRouter = require('./v1/routes/workoutRoutes');

const app = express();

app.use('/api/v1/workouts', v1WorkoutRouter);

app.listen(PORT, () => console.log(`App is running on: ${HOST}\n\nlistening on port: ${PORT}`));