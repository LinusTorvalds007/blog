const express = require('express');
const dbConnect = require('./database/index');
const {PORT} = require('./config/index'); 
const router = require('./routes/index');
const app = express();
app.use(router);
let PORT_FINAL = PORT;
dbConnect();
//app.get('/',(req,res)=>res.json({msg:`Hello my name is Akash Girotra123`}))
app.listen(PORT,console.log(`Backend in running on port:${PORT}`));
