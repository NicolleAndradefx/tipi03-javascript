//setTimeOu
function exibirMensagem(){
    console.log('A mensagem foi exibida após 6 segundos');
}

setTimeout(exibirMensagem, 6000);

//setInterval
/*
function exibirMensagemNova(){
    console.log('A mensagem foi exibida após 3 segundos.');
}

setInterval(exibirMensagemNova, 3000);
*/


//Async 
async function esperar(segundos) {
    return new Promise((resolve) =>{
        setTimeout(() =>{
            resolve(`Esperei ${segundos} segundos.`);
        }, segundos * 1000);
    });
};

async function executar() {
    const resultado = await esperar(3);
    console.log(resultado);
}
executar();