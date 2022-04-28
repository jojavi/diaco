const express = require("express");
const router = express.Router();
const { MongoClient } = require("mongodb");

router.post('/seguimiento', async (req, res) => 
{
    const uri ="mongodb+srv://anayte:12345@bdcli.dkohx.mongodb.net/bdcli?retryWrites=true&w=majority";
    const client = new MongoClient(uri);

    try
    {
        // conectar al cliente
        await client.connect();

        // acceder a la base
        const database = client.db('bdcli');
        const collection = database.collection('quejas');

        // Query para encontrar al usuario
        const validar = await collection.find().toArray();

        // imprime lo encontrado 
        if(validar != null){
            console.log('Busqueda correcta');
            res.render('partials/seguimiento', {validar});
        }
        else
        {
            console.log('Incorrecto');
            res.redirect('/login');
        }
    }
    catch (err)
    {
        res.redirect('/index');
        console.log('fallo de connect');
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