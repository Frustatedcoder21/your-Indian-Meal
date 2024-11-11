const express=require('express');
const app=express();
const path=require('path');
const dotenv=require('dotenv');
const adminRoutes=require('./routes/adminRoutes');
const apiRoutes=require('./routes/apiRoutes');
const connectDB=require('./config/db');
const cookieParser = require('cookie-parser');
 dotenv.config();
 const PORT=process.env.PORT;
 app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));
app.set('view engine' , 'ejs');

app.use('/admin', adminRoutes);
app.use('/api', apiRoutes);

app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`);
    
});