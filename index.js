import {Cliente} from "./Cliente.js"
import {Diretor} from "./Funcionario/Diretor.js"
import {Gerente} from "./Funcionario/Gerente.js"
import {SistemaAutenticacao} from "./SistemaAutenticacao.js"
 
const diretor = new Diretor("Rodrigo", 10000, 12345678900);
diretor.cadastrarSenha("123456");
const gerente = new Gerente("Rodrigo", 5000, 12378945601);
gerente.cadastrarSenha("123");

const cliente = new Cliente("Lais", 78945612379, "456");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123");

const clienteEstaLogado = SistemaAutenticacao.login(cliente, "456");
console.log(clienteEstaLogado);
// console.log(diretorEstaLogado);
// console.log(gerenteEstaLogado);

/* Guia para starta projeto com modulo
npm init
ai só da enter all
acabamos de cria o package.json
vai no package.json e coloca "type": "module",
*/