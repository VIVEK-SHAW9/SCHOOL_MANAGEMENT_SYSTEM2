const express = require('express');
const app = express();

 
const useRoute = require('./routes/user')
const batchRoute = require('./routes/batch')
const studentRoute = require('./routes/student')
const feeRoute = require('./routes/fee')



app.use('./user',useRoute)
app.use('./batch',batchRoute)
app.use('./student',studentRoute)
app.use('./fee',feeRoute)

app.use('*',(req,res)=>{
    res.status(404).json({
        msg:'bad request'
    })
})



module.exports = app;