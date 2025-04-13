const express = require('express');
const todoRoutes = require('./routes/todoRoutes');

const app   = express();
const PORT = 61830;

app.use('/todoRoutes', todoRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    }
);