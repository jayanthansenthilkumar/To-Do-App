const express = require('express');
const { createTODO,deleteTODO } = require('../models/todo');
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

module.exports = router;