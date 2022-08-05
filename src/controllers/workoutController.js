
// handle workout creation
const getAllWorkouts = (req, res) => {
    res.send("GET all workouts");
}

const getSingleWorkout = (req, res) => {
    res.send(`GET single workout`);
}

const createNewWorkout = (req, res) => {
    res.send("Create new workout");
}

const updateSingleWorkout = (req, res) => {
    res.send(`Update single existing workout`);
}

const deleteSingleWorkout = (req, res) => {
    res.send(`Delete single existing workout`);
}

module.exports = {
    getAllWorkouts,
    getSingleWorkout,
    createNewWorkout,
    updateSingleWorkout,
    deleteSingleWorkout
};