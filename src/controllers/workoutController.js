
// initialize the service 
const workoutService = require('../services/workoutService');
// handle workout creation
const getAllWorkouts = (req, res) => {

    // get all workouts from the service layer
    const allWorkouts = workoutService.getAllWorkouts();

    res.send({status: "ok", data: allWorkouts});
}

const getSingleWorkout = (req, res) => {

    // get single workout from the service layer
    const singleWorkout = workoutService.getSingleWorkout();
    res.send(`GET single workout`);
}

const createNewWorkout = (req, res) => {
    const { name, mode, equipment, exercises, trainerTips } = req.body; //retrieve the workout data from the request body

    // create new workout object
    const newWorkout = {
        name,
        mode,
        equipment,
        exercises,
        trainerTips
    }
    // create new workout in the service layer
    const createdWorkout = workoutService.createNewWorkout(newWorkout);
    res.status(201).send({status: "ok", data: createdWorkout});
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