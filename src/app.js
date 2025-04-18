const express = require('express');
require('./db/mongo');
const todoRoutes = require('./routes/todo');

const app   = express();
app.use(express.json());
app.use('/todo', todoRoutes);

app.listen(61830, () => {
    console.log(`Server is running on http://localhost:61830`);
    }
);