/*O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?

let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma');
let campoSaldo = document.getElementById('campo-saldo');

campoSaldo.innerHTML = 0

function somarAoSaldo(soma) {
    campoSaldo.innerHTML += soma;
}

function limparSaldo() {
    campoSaldo.innerHTML = '';
}

botaoAtualizar.addEventListener('click', function () {
    somarAoSaldo(soma.value);
});

botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});*/

let botaoAtualizar = document.getElementById('atualizar-saldo') as HTMLButtonElement
let botaoLimpar = document.getElementById('limpar-saldo') as HTMLButtonElement;
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo') as HTMLSpanElement;

if(campoSaldo && botaoAtualizar){
    botaoAtualizar.addEventListener('click', () => {
        let recebeDinheiro = Number(soma.value);
        somarSaldo(recebeDinheiro)
    })
    function somarSaldo(valor : number){
        let valorCampoSaldo: number = 0;
        if(campoSaldo.innerText !== ""){
            valorCampoSaldo = Number(campoSaldo.innerHTML);
        }
        const Saldo = valorCampoSaldo + valor;
        campoSaldo.innerText = Saldo.toString();
    }

    botaoLimpar.addEventListener('click', () => {
        falencia();
    })
    function falencia(){
        campoSaldo.innerHTML = '0';
    }
    
}
