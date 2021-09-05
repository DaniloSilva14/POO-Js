/*
Ser autenticavel significa que ele tem a propriedade "senha"

ducky type
    int algo, tipo algo

    voce define o tipo que ele devia ser
*/

export class SistemaAutenticacao {
    static login(autenticavel, senha) {
        if (SistemaAutenticacao.ehAutenticavel(autenticavel)) {
            return autenticavel.autenticar(senha);
        }
        return false;
    }

    static ehAutenticavel(autenticavel) {
        return "autenticar" in autenticavel &&
         autenticavel.autenticar instanceof Function;
    }
}