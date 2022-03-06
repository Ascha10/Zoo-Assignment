const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser')
const dbConnection = require('./DB/storeDB');
const path = require('path')
const authRoutes = require('./Routes/auth'); 
const animalsRoutes = require('./Routes/ainmals'); 
const passport = require('passport')
require('./Config/passport')(passport);



app.use(cors());

app.use(express.urlencoded({ extended: false }));

app.use(express.json()); 
app.use(cookieParser());


app.use(passport.initialize());
app.use('/Api',authRoutes);
app.use('/Api',passport.authenticate('jwt',{session:false}),animalsRoutes);



const port =  process.env.PORT || 7000 ;
app.listen(port,() => {
    console.log(`listening on port ${port}`);
})

