
// initialize the service 
const workoutService = require('../services/workoutService');
// handle workout creation
const getAllWorkouts = (req, res) => {

    // get all workouts from the service layer
    const allWorkouts = workoutService.getAllWorkouts();
    res.send("GET all workouts");
}

const getSingleWorkout = (req, res) => {

    // get single workout from the service layer
    const singleWorkout = workoutService.getSingleWorkout();
    res.send(`GET single workout`);
}

const createNewWorkout = (req, res) => {

    // create new workout in the service layer
    const newWorkout = workoutService.createNewWorkout();
    res.send("Create new workout");
}

const updateSingleWorkout = (req, res) => {

    // update single workout in the service layer
    const updatedWorkout = workoutService.updateSingleWorkout();
    res.send(`Update single existing workout`);
}

const deleteSingleWorkout = (req, res) => {

    // delete single workout in the service layer
    workoutService.deleteSingleWorkout();
    res.send(`Delete single existing workout`);
}

module.exports = {
    getAllWorkouts,
    getSingleWorkout,
    createNewWorkout,
    updateSingleWorkout,
    deleteSingleWorkout
};