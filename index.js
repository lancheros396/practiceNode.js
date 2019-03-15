

const express = require("express");
const router =express.Router();
const controllers=requiere("..controllers/index");

router.get ('login',controllers.getData);

router.get('/pruebaJsonUE',controllers.sirveJson);

router.get ('/', controllers.getPet);

router.post ('/tryPost', (req,res)=>{
    console.log(req.body);
} );
module.express=router;