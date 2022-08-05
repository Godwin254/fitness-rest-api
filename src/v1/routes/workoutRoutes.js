const express = require('express');
const router = express.Router();

//specify the route for the workout collection (/api/v1/workouts) - GET request - returns all workouts in the collection 
router.get("/", (req, res) => {
    res.send("GET request received at /api/v1/workouts");
})

// single workout - GET request - returns a single workout with the specified id
router.get("/:workoutId", (req, res) => {
    res.send(`GET request received at /api/v1/workouts/${req.params.workoutId}`);
})

// post a new workout - POST request - adds a new workout to the collection
router.post("/", (req, res) => {
    res.send("POST request received at /api/v1/workouts");
})

// update a workout - PUT request - updates a workout with the specified id
router.patch("/:workoutId", (req, res) => {
    res.send(`PATCH request received at /api/v1/workouts/${req.params.workoutId}`);
});

// delete a workout - DELETE request - deletes a workout with the specified id
router.delete("/:workoutId", (req, res) => {

})

module.exports = router;