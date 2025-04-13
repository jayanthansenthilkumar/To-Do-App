const mongoose = require('mongoose');
const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    method: String,
}, { 
    timestamps: true 
});

const todoModel = mongoose.model('TODO', todoSchema);
async function createTODO(title,description,method) {
    const todo = await todoModel.create({
        title,
        description,
        method,
    });
    return todo;
}

async function deleteTODO(_id) {
    const deleteResponse = await todoModel.deleteOne({ _id });
    return deleteResponse;
}

module.exports = {
    createTODO,
    deleteTODO
};