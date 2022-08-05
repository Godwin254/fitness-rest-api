
const Workout = require('../database/Workout');
// service layer for workout service - workoutService.js - this is the service layer that will be used by the controller to interact with the database and the model layer to interact with the database 

// service method to get all workouts (business logic)
const getAllWorkouts = () => {
    const allWorkouts = Workout.getAllWorkouts();
    
    return allWorkouts;
}

const getSingleWorkout = () => {
    return;
}

const createNewWorkout = () => {
    return;
}

const updateSingleWorkout = () => {
    return;
}

const deleteSingleWorkout = () => {
    return;
}

module.exports = {
    getAllWorkouts,
    getSingleWorkout,
    createNewWorkout,
    updateSingleWorkout,
    deleteSingleWorkout
}