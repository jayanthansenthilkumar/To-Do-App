const express = require('express');
const { createTODO } = require('../models/todo');
const router = express.Router();


router.post('/', async (req, res) => {
    const { title,description,method } = req.body;
    const todo = await createTODO(title,description,method);
    res.send(todo);
});

module.exports = router;