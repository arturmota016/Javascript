var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('<h1>bem-vindo(a) a rota Usuários!</h1>');
});

module.exports = router;
