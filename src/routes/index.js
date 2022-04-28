const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.render('partials/diaco');
});

router.get('/login', (req, res) => {
    res.render('partials/login');
});

router.get('/menu', (req, res) => {
    res.render('partials/menu');
});

router.get('/seguimiento', (req, res) => {
    res.render('partials/seguimiento');
});

router.get('/quejar', (req, res) => {
    res.render('partials/quejar');
});

router.get('/quejas', (req, res) => {
    res.render('partials/quejas');
});

router.get('/verempleados', (req, res) => {
    res.render('partials/veremepleados');
});

router.get('/registrar', (req, res) => {
    res.render('partials/regcomercios');
});

router.get('/estadisticas', (req, res) => {
    res.render('partials/estadisticas');
});

module.exports = router;