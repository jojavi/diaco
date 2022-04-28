const { query } = require("express");
const express = require("express");
const router = express.Router();
const { MongoClient } = require("mongodb");

router.post('/data', async (req, res) => {

    const uri ="mongodb+srv://anayte:12345@bdcli.dkohx.mongodb.net/bdcli?retryWrites=true&w=majority";
    const client = new MongoClient(uri);

    try 
    {

        // conectar al cliente
        await client.connect();

        // acceder a la base
        const database = client.db('bdcli');
        const collection = database.collection('quejas');
        
        const docs = await collection.find().toArray();

        if(docs != null){
            console.log('Busqueda correcta');
            res.render('partials/estadisticas', {docs});
        }
        else
        {
            console.log('Busqueda Incorrecta');
            res.redirect('/login');
        }
    }
    catch (err)
    {
        res.redirect('/index');
        console.log('fallo de connect data');
    }
    finally
    {
        // imprime el resultado 
        // run().catch(console.dir);
        // cierra la coneccion 
        await client.close();
    }
    
  
  });

  module.exports = router;
