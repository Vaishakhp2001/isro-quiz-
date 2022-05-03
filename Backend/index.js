require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const connection = require('./db');
const userRouter = require('./routes/users');
const authRouter = require('./routes/auth');
const profileRouter = require('./routes/profile');

//database connection
connection()

//middlewares
app.use(express.json())
app.use(cors())

//routes
app.use('/api/profile',profileRouter);
app.use('/api/users',userRouter);
app.use('/api/auth',authRouter);

const port = process.env.PORT||8080;
app.listen(port,()=> console.log(`listening on port ${port}`)) 

