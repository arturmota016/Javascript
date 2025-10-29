const clientesdoModel = require('../models/clientesModel');

module.exports = {
    
    clientes: (req, res) => {
        res.sendFile('clientes.html', { root: './views' });
    },

    login: (req, res) => {
        res.sendFile('login.html', { root: './views' });
    },

    verificado: (req, res) => {
    const { nome, senha } = req.body;
    const mensagem = clientesdoModel.gerarMensagemPersonalizada(nome, senha);
      res.send(`<h1>${mensagem}</h1>`);
  }
};