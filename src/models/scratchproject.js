import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ScratchprojectSchema = new Schema({
    project_id: {
        type: String,
        required: true
    },
    release_date: {
        type: Date,
        required: true
    }
})

module.exports = mongoose.model("ScratchProject", ScratchprojectSchema);