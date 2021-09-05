import {Conta} from "./Conta.js"

export class ContaCorrente extends Conta{
    static numDeContas = 0;

    // https://github.com/tc39/proposal-class-fields#private-fields
    // atributo privado padrão node coloca #nomeVar
    // atributo privado padrão js coloca _nomeVar

    constructor(cliente, agencia){
        super(0, cliente, agencia);
        ContaCorrente.numDeContas++;
    }

    // sobreescrevendo comportamento de sacar
    sacar(valor){
        let taxa = 1.1;
        
        return this._sacar(valor, taxa);
    }
}