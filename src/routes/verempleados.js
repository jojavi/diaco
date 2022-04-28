const express = require("express");
const router = express.Router();
//const { MongoClient } = require("mongodb");

router.post('/verempleados', async (req, res) => 
{
    res.redirect('verempleados');
    console.log('Ingreso a sitio');
});

module.exports = router;