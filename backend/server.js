const mongoose = require('mongoose');

mongoose.connect('mongodb://username:<password>@cluster0.mongodb.net/dbname', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("MongoDB connected successfully!");
}).catch(err => {
    console.log("Error connecting to MongoDB:", err);
});

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello from the backend!');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
