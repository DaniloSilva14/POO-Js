// Classe Abstrata
export class Conta {
    // Construtor
    constructor(saldoInicial, cliente, agencia) {
        if (this.constructor == Conta) {
            throw new Error("Você não deveria instancia objeto de Conta, classe Abstrata");
            // console.log("Você não deveria instancia objeto de Conta");
        }

        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

    // SET
    set cliente(novoValor) {
        if (novoValor instanceof Cliente)
            this._cliente = novoValor;
    }

    // GET
    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }

    // Funcoes
    // metodo abstrato, feito para ser sobreescrito
    sacar(valor) {
        throw new Error("O metodo sacar da Conta é Abstrata");
    }

    // metodo privado generico
    _sacar(valor, taxa) {
        const valorSacado = taxa * valor;

        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;
        }

        return 0;
    }

    depositar(valor) {
        if (valor > 0) this._saldo += valor;
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}