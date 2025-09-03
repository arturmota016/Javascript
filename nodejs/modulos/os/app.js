//importando o módulo os (operating system)
const os = require('os');

//exibindo informações sobre o sistema operacional
//exibindo a arquitetura do sistema
console.log('Arquitetura do sistema:', os.arch());
//exibindo a quantidae de CPUs
console.log('Quantidade de CPUs:', os.cpus().length);
//exibindo o total de memória em bytes
console.log('Memória total (bytes):', os.totalmem());
//exibindo a memória livre em bytes
console.log('Memória livre (bytes):', os.freemem());
//exibindo o sistema operacional
console.log(os.platform());