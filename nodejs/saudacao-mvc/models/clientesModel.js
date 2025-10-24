module.exports = {
  gerarMensagemPersonalizada: (nome, senha) => {
    let status;

    if (nome === "artur"  && senha === "1234") {
        status = "foi liberado";
    } else {
        status = "foi bloqueado. verifique seu nome e senha";
    }

    return `Olá, ${nome}! Você ${status}.`;
  }
};
