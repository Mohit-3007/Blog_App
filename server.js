require('dotenv').config();
const express = require("express");
const app = express();

const { mongoDb } = require('./src/Utils/index');
mongoDb.initialize();

const User = require("./src/models/User")
const Blog = require("./src/models/Blog")
const Tag = require("./src/models/Tag")
const Comments = require("./src/models/Comment")

const authRoutes = require("./src/routes/authRoutes");

// for Global to work
require("./src/globals/index")

// middleware
app.use(express.json())
     
app.use(authRoutes);


const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server is started on Port ${PORT}`)
})    
 