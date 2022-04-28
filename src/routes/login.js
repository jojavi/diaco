const express = require("express");
const router = express.Router();
const { MongoClient } = require("mongodb");

router.post('/login', async (req, res) => 
{
    const { usr, psw } = req.body;
    const errors = [];
    const stt = true;

    if (!usr) {
        errors.push({ text: "Debe escribir 1 al menos 1 caracter" });
        res.redirect('/index');
    }
    if (!psw) {
        errors.push({ text: "Debe escribir 1 al menos 1 caracter" });
        res.redirect('/index');
    }
    else
    {

        const uri ="mongodb+srv://anayte:12345@bdcli.dkohx.mongodb.net/bdcli?retryWrites=true&w=majority";
        const client = new MongoClient(uri);

        try
        {
            // conectar al cliente
            await client.connect();

            // acceder a la base
            const database = client.db('bdcli');
            const collection = database.collection('login');

            // Query para encontrar al usuario
            const query = { usrname: usr, usrpassword: psw, usrstatus:stt};
            const validar = await collection.findOne(query);

            // imprime lo encontrado 
            if(validar != null){
                console.log('Login correcto');
                req.session.Usuario= validar;
                res.redirect('/menu');
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
    }
});

module.exports = router;