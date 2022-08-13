
// initialize the service 
const workoutService = require('../services/workoutService');

// handle workout creation
const getAllWorkouts = (req, res) => {

    // get all workouts from the service layer
    const allWorkouts = workoutService.getAllWorkouts();

    res.send({status: "ok", data: allWorkouts});
}

const getSingleWorkout = (req, res) => {

    const { 
        params: { workoutId }
     } = req;

    //check if workout exists
    if (!workoutId) {
        return; //handle later
    }


    // get single workout from the service layer
    const workout = workoutService.getSingleWorkout(workoutId);
    res.send({status: "Ok", data: workout});
}

const createNewWorkout = (req, res) => {
    const { name, mode, equipment, exercises, trainerTips } = req.body; //retrieve the workout data from the request body

    if(!name || !mode || !equipment || !exercises || !trainerTips) {
        res.status(400).send({status: "FAILED", data: {error: "One of the keys is missing or empty {name, mode, equipment, exercises, trainerTips}"}});
        return; //handle later
    }

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
    const {
        body,
        params: { workoutId }

    } = req;

    //validate if the id exists
    if (!workoutId) {
        return; //handle later
    }

    // update single workout in the service layer
    const updatedWorkout = workoutService.updateSingleWorkout(workoutId, body);
    res.send({status: "ok", data: updatedWorkout});
}

const deleteSingleWorkout = (req, res) => {

    const {
        params: { workoutId}
    } = req

    if (!workoutId){
        return; //handle later
    }
    // delete single workout in the service layer
    workoutService.deleteSingleWorkout(workoutId);
    res.status(204).send({status: "ok"});
}

module.exports = {
    getAllWorkouts,
    getSingleWorkout,
    createNewWorkout,
    updateSingleWorkout,
    deleteSingleWorkout
};