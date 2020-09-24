const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:3000/noderest', 
    { useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true});