const recordService = require('../services/recordService');

const getRecordForWorkout = (req, res) => {
    try{
        const { workoutId } = req.params;
        const records = recordService.getRecordForWorkout(workoutId);
        res.send({ status: "ok", data: records });
    }catch(error){
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
}

module.exports = {
    getRecordForWorkout
}