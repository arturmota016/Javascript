const express = require('express');
const router = express.Router();
const clientesController = require('../controllers/clientesController');

router.get("/", clientesController.clientes);
router.get("/login", clientesController.login);
router.post("/liberado", clientesController.liberado);


module.exports = router;