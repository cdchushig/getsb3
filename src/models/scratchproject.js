import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ScratchprojectSchema = new Schema({
    project_id: {
        type: String,
        required: true
    },
    date_updated: {
        type: Date,
        default: Date.now,
        required: true
    }
})

let ScratchProject = mongoose.model('ScratchProject', ScratchprojectSchema);

export default ScratchProject;
