
const DB = require('./db.json');
const { saveToDatabase } = require('../database/utils');

//accessing all workout data
const getAllWorkouts = ( ) => {
    return DB.workouts;
}

//accessing a single workout
const getSingleWorkout = (workoutId) => {
    const workout = DB.workouts.find(workout => workout.id === workoutId);

    if (!workout) {
        return; //handle later
    }

    return workout;
}

//create new workout to the DB
const createNewWorkout = (newWorkout) => {
    
    //check if already added
    const workoutExists = DB.workouts.findIndex(workout => workout.name === newWorkout.name) > -1;

    if (workoutExists) {
        throw new Error('Workout already exists');
        return;
    }

    DB.workouts.push(newWorkout);
    saveToDatabase(DB);

    return newWorkout;
}

module.exports = { getAllWorkouts, createNewWorkout };