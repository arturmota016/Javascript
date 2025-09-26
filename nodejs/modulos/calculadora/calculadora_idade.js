export function idade(nome,nascimento,anoAtual) {
    idade = anoAtual - nascimento;
    return `Olá, ${nome}! Em ${anoAtual} você terá ${idade} anos!`;
}

// Exportando a função para que possa ser usada em outros arquivos
