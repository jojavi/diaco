const express = require("express");
const router = express.Router();
//const { MongoClient } = require("mongodb");

router.post('/menu', async (req, res) => 
{
    res.redirect('menu');
    console.log('El menu');
});

module.exports = router;