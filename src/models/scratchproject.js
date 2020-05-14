import mongoose from 'mongoose';

let scratchproject = new mongoose.Schema({
    project_id: String,
    release_date: String
})

module.exports = mongoose.model("ScratchProject", scratchproject);