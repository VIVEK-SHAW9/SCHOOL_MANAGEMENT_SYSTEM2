const express = require('express')
const router = express.Router()

router.post('/add-batch',(req,res)=>{
    res.status(200).json({
        msg:"add new batch request"
    })
})

router.get('/',(req,res)=>{
    res.status(200).json({
        msg:"get batch request"
    })
})


module.exports = router;