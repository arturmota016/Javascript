const saudacaoModel = require('../models/saudacaoModel');

module.exports = {
  index: (req, res) => {
    res.sendFile('index.html', { root: './views' });
  },

  formulario: (req, res) => {
    res.sendFile('formulario.html', { root: './views' });
  },


  saudacao: (req, res) => {
    const { nome, idade } = req.body;
    const mensagem = saudacaoModel.gerarMensagemPersonalizada(nome, idade);
    res.send(`<h1>${mensagem}</h1>`);
  },

  produtos: (req, res) => {
   
    res.send(`<h1>Produtos</h1><br><p><a href="/produtos/camisetas">Camisetas</a></p>`);
  },

  camisetas: (req, res) => {
    res.send(`<h1>Rota de camisetas</h1>`);
  }
};
