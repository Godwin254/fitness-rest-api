
const { v4: uuid } = require('uuid');
const Workout = require('../database/Workout');
// service layer for workout service - workoutService.js - this is the service layer that will be used by the controller to interact with the database and the model layer to interact with the database 

// service method to get all workouts (business logic)
const getAllWorkouts = () => {
    try{
        const allWorkouts = Workout.getAllWorkouts();
        return allWorkouts;

    }catch(error){
        throw error;
    }
}

const getSingleWorkout = (workoutId) => {
    try{
        const workout = Workout.getSingleWorkout(workoutId);
        return workout;
    }catch(error){
        throw error;
    }
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
    try{
        const updatedWorkout = Workout.updateSingleWorkout(workoutId, changes);
        return updatedWorkout;
    }catch(error){
        throw error;
    }
}

const deleteSingleWorkout = (workoutId) => {
    try{
        Workout.deleteSingleWorkout(workoutId);
    }catch(error){
        throw error;
    }
  
}

module.exports = {
    getAllWorkouts,
    getSingleWorkout,
    createNewWorkout,
    updateSingleWorkout,
    deleteSingleWorkout
}