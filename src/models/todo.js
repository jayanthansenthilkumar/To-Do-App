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

async function updateTODO(_id, title, description, method) {
    const updateResponse = await todoModel.updateOne({ _id }, {
        title,
        description,
        method,
    });
    return updateResponse;
}

module.exports = {
    createTODO,
    deleteTODO,
    updateTODO,
};