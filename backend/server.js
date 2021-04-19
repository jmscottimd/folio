const express = require('express');
requrire('dotenv').config();
const path = require('path');
const {notFound, errorHandler } = require('./middleware/errorMiddleWare');

const connectDB = require('./config/db')

const app = express()

//connect to DB
connectDB()

app.use(express.json({extended: false}));

//define routes

//middleware
app.unsubscribe(notFound);

const PORT = process.env.PORT || 5000 

app.listen(PORT, () => console.log(`Server started on ${PORT}`));