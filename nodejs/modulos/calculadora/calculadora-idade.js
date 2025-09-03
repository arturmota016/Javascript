function idade(nascimento,nome) {
    idade = 2025 - nascimento;
    return `Olá, ${nome}! Em 2025 você terá ${idade} anos!`;
}

// Exportando a função para que possa ser usada em outros arquivos
module.exports = {
    idade
};