const express = require("express");
const router = express.Router();
const { MongoClient } = require("mongodb");
const serssion = require("express-session");


router.post('/registrocomercio', async (req, res) => 
{    console.log("ingresa aqui1");
    // variables
    const { nombre, region, departamento, municipio } = req.body;

    console.log(nombre, region, departamento, municipio);

    //var id = Math.random();
    const hoy = new Date();
    const errors = [];

    //mongodb+srv://anayte:12345@bdcli.dkohx.mongodb.net/bdcli?retryWrites=true&w=majority

        const uri ="mongodb+srv://anayte:12345@bdcli.dkohx.mongodb.net/bdcli?retryWrites=true&w=majority";
        const client = new MongoClient(uri);

        console.log("ingresa aqui2");

        try
        {
            // conectar al cliente 
            console.log("ingresa aqui2.1");
            await client.connect();
            console.log("ingresa aqui2.2");
            // acceder a la base 
            const database = client.db('bdcli');
            const collection = database.collection('comercios');
            console.log("ingresa aqui3");
            // Query para ingresar queja
            const query = {
                nombre: nombre,
                region: region,
                departamento: departamento,
                municipio : municipio,
                fecharegistro: hoy};

            const validar = await collection.insertOne(query);

            // imprime lo encontrado
            if(validar != null)
            {   console.log("ingresa aqui4");
                res.redirect('/registrar');
            }
            else
            {   console.log("ingresa aqui5");
                console.log(validar);
                res.redirect('/menu');
             }
        }
        catch (err)
        {  console.log("ingresa aqui6");
            console.log(err);
            res.redirect('/login');
        }
        finally
        {  
            console.log("ingresa final");
            // imprime el resultado 
            //run().catch(console.dir);
            // cierra la coneccion 
            await client.close();
        }
    

});

module.exports = router;