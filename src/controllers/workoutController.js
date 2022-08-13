
// initialize the service 
const workoutService = require('../services/workoutService');

// handle workout creation
const getAllWorkouts = (req, res) => {

    try{
        // get all workouts from the service layer
        const allWorkouts = workoutService.getAllWorkouts();
        res.send({ status: "ok", data: allWorkouts });
    }catch(error){
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
}

const getSingleWorkout = (req, res) => {

    const { 
        params: { workoutId }
     } = req;

    //check if workout exists
    if (!workoutId) {
        res
            .status(400)
            .send({status: "FAILED",
                data: {error: "Workout id is missing"}
            });
        return; //handle later
    }


    try{
        // get single workout from the service layer
        const workout = workoutService.getSingleWorkout(workoutId);
        res.send({ status: "Ok", data: workout });
    }catch(error){
        res
            .status( error?.status || 500)
            .send({status: "FAILED", data: {error: error?.message || error}})
    }
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
    
    try{
        // create new workout in the service layer
        const createdWorkout = workoutService.createNewWorkout(newWorkout);
        res.status(201).send({ status: "ok", data: createdWorkout });
    }catch(error){
        res
            .status( error?.status || 500)
            .send({status: "FAILED", data: {error: error?.message || error}})
    }
}

const updateSingleWorkout = (req, res) => {

    // update single workout in the service layer
    const {
        body,
        params: { workoutId }

    } = req;

    //validate if the id exists
    if (!workoutId) {
        res
            .status(400)
            .send({status: "FAILED", data: {error: "Workout id is missing"}});
       
    }

    try{
        // update single workout in the service layer
        const updatedWorkout = workoutService.updateSingleWorkout(workoutId, body);
        res.send({ status: "ok", data: updatedWorkout });
    }catch(error){
        res
            .status(error?.status || 500)
            .send({status: "FAILED", data: {error: error?.message || error}})

    }
}

const deleteSingleWorkout = (req, res) => {

    const {
        params: { workoutId}
    } = req

    if (!workoutId){
        res
            .status(400)
            .send({
                status: "FAILED",
                data: { error: "Parameter ':workoutId' can not be empty" },
            });
    }
    
    try{
        // delete single workout in the service layer
        workoutService.deleteSingleWorkout(workoutId);
        res.status(204).send({ status: "ok" });
    }catch(error){
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
}

module.exports = {
    getAllWorkouts,
    getSingleWorkout,
    createNewWorkout,
    updateSingleWorkout,
    deleteSingleWorkout
};