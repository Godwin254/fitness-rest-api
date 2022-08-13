
const { v4: uuid } = require('uuid');
const Workout = require('../database/Workout');
// service layer for workout service - workoutService.js - this is the service layer that will be used by the controller to interact with the database and the model layer to interact with the database 

// service method to get all workouts (business logic)
const getAllWorkouts = () => {
    const allWorkouts = Workout.getAllWorkouts();

    return allWorkouts;
}

const getSingleWorkout = (workoutId) => {
    const workout = Workout.getSingleWorkout(workoutId);
    return workout;
}

const createNewWorkout = (newWorkout) => {

    //bloc
    const workoutToInsert = {
        ...newWorkout,
        id: uuid(),
        createdAt: new Date().toDateString("en-US", {timeZone: "Africa/Nairobi"}),
        updatedAt: new Date().toDateString("en-US", {timeZone: "Africa/Nairobi"})
    };

    try{
        const createdWorkout = Workout.createNewWorkout(workoutToInsert);
        return createdWorkout;
    }catch(error){
        throw error;
    }
}

const updateSingleWorkout = (workoutId, changes) => {
    const updatedWorkout = Workout.updateSingleWorkout(workoutId, changes);
    return updatedWorkout;
}

const deleteSingleWorkout = (workoutId) => {
    Workout.deleteSingleWorkout(workoutId);
   // return; - nothing to be returned
}

module.exports = {
    getAllWorkouts,
    getSingleWorkout,
    createNewWorkout,
    updateSingleWorkout,
    deleteSingleWorkout
}