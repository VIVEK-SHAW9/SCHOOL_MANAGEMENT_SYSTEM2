const express = require('express')
const router = express.Router()

router.post('/signup',(req,res)=>{
    res.status(200).json({
        msg:"signup-request"
    })
})




module.exports = router;