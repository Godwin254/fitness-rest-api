const express = require('express');
const router = express.Router();
const workoutController = require('../../controllers/workoutController');

//specify the route for the workout collection (/api/v1/workouts) - GET request - returns all workouts in the collection 
router.get("/", workoutController.getAllWorkouts);

// single workout - GET request - returns a single workout with the specified id
router.get("/:workoutId", workoutController.getSingleWorkout);

// post a new workout - POST request - adds a new workout to the collection
router.post("/", workoutController.createNewWorkout);

// update a workout - PUT request - updates a workout with the specified id
router.patch("/:workoutId", workoutController.updateSingleWorkout);

// delete a workout - DELETE request - deletes a workout with the specified id
router.delete("/:workoutId", workoutController.deleteSingleWorkout);

module.exports = router;