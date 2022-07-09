var botaoAtualizar = document.getElementById('atualizar-saldo');
var botaoLimpar = document.getElementById('limpar-saldo');
var soma = document.getElementById('soma');
var campoSaldo = document.getElementById('campo-saldo');
if (campoSaldo && botaoAtualizar) {
    botaoAtualizar.addEventListener('click', function () {
        var recebeDinheiro = Number(soma.value);
        somarSaldo(recebeDinheiro);
    });
    function somarSaldo(valor) {
        var valorCampoSaldo = 0;
        if (campoSaldo.innerText !== "") {
            valorCampoSaldo = Number(campoSaldo.innerHTML);
        }
        var Saldo = valorCampoSaldo + valor;
        campoSaldo.innerText = Saldo.toString();
    }
    botaoLimpar.addEventListener('click', function () {
        falencia();
    });
    function falencia() {
        campoSaldo.innerHTML = '0';
    }
}
