const { query } = require("express");
const express = require("express");
const router = express.Router();
const { MongoClient } = require("mongodb");

router.post('/diaco', async (req, res) => 
{
    const uri ="mongodb+srv://anayte:12345@bdcli.dkohx.mongodb.net/bdcli?retryWrites=true&w=majority";
    const client = new MongoClient(uri);

    try
         {
             // conectar al cliente 
             await client.connect();
 
             // acceder a la base
             const database = client.db('bdcli');
             const collection = database.collection('comercios');
             const collection1 = database.collection('regiones');
             

             const ubicacion = await collection1.find().toArray();
             const comerico = await collection.find().toArray();
             
         
             // imprime lo encontrado 
             if(ubicacion != null){
                 console.log(ubicacion);
                 res.render('partials/quejar', {ubicacion ,comerico} );
             }
             else
             {
                 console.log('Error al cargar');
                 res.redirect('/diaco')
             }
         }
         catch (err)
         {
             console.log('err');
             res.redirect('/login')
         }
         finally
         {
             // cierra la coneccion 
             await client.close();
         }
    
});

module.exports = router;