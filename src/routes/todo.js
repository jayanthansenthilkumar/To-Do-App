const express = require('express');
const { createTODO,deleteTODO,updateTODO,getTODO } = require('../models/todo');
const router = express.Router();


router.post('/', async (req, res) => {
    const { title,description,method } = req.body;
    const todo = await createTODO(title,description,method);
    res.send(todo);
});

router.delete('/:id', async (req, res) => {
    const _id = req.params.id;
    const resp = await deleteTODO(_id);
    res.send(resp);
});

router.put('/:id', async (req, res) => {
    const _id = req.params.id;
    const { title,description,method } = req.body;
    const resp = await updateTODO(_id,title,description,method);
    res.send(resp);
});

router.get('/', async (req, res) => {
    const todos = await getTODO();
    res.send(todos);
});
module.exports = router;