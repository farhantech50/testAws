const express = require('express');
const router = express.Router(); 

router.get('/',(req,res)=>{
    if(!req.query.name){
        res.sendStatus(404);
    }
    else{
        res.render('testView',{val:req.query.name})
    }
})

module.exports = router;