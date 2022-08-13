
const DB = require('./db.json');
const { saveToDatabase } = require('../database/utils');

//accessing all workout data
const getAllWorkouts = ( ) => {
    try{
        return DB.workouts;
    }catch(error){
        throw {status: 500, message: error}
    }
}

//accessing a single workout
const getSingleWorkout = (workoutId) => {
    try{
        const workout = DB.workouts.find(workout => workout.id === workoutId);
        if (!workout) {
            return; //handle later
        }
        return workout;
    }catch(error){
        throw {status: error?.status, message: error?.message || error};
    }
}

//create new workout to the DB
const createNewWorkout = (newWorkout) => {
    
    try{
        //check if already added
        const workoutExists = DB.workouts.findIndex(workout => workout.name === newWorkout.name) > -1;

        if (workoutExists) {
            throw {
                status: 400,
                message: `Workout with name ${newWorkout.name} already exists`
            };
            //return;
        }
        DB.workouts.push(newWorkout);
        saveToDatabase(DB);
        return newWorkout;
    }catch(error){
        throw {
            status: 500,
            message: error?.message || error
        };
    }
}

//update a single workout
const updateSingleWorkout = (workoutId, changes) => {
    try{
        //check if index exists
        const indexForUpdate = DB.workouts.findIndex(workout => workout.id === workoutId);

        //if index doesn't exist -1 
        if (indexForUpdate === -1) {
            throw new Error('Workout does not exist');
            return;
        }

        //create object of the updated workout
        const updatedWorkout = {
            ...DB.workouts[indexForUpdate],
            ...changes,
            updatedAt: new Date().toDateString("en-US", { timeZone: "Africa/Nairobi" })
        };

        DB.workouts[indexForUpdate] = updatedWorkout;

        saveToDatabase(DB);
        return updatedWorkout
    }catch(error){
        throw {
            status: error?.status || 500,
            message: error?.message || error
        };
    }

}

// delete a single workout
const deleteSingleWorkout = (workoutId) => {
    try{
        //check if index exists
        const indexForDelete = DB.workouts.findIndex(workout => workout.id === workoutId);

        //if index doesn't exist -1 
        if (indexForDelete === -1) {
            throw new Error('Workout does not exist');
            return;
        }

        DB.workouts.splice(indexForDelete, 1);

        saveToDatabase(DB);
    }catch(error){
        throw {
            status: error?.status || 500,
            message: error?.message || error
        };
    }
}

module.exports = { 
    getAllWorkouts,
    createNewWorkout,
    getSingleWorkout,
    updateSingleWorkout,
    deleteSingleWorkout 
};