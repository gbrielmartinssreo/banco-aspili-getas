"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var extrato_1 = require("./services/extrato");
var gerente_1 = require("./services/gerente");
var pf_1 = require("./services/pf");
var pj_1 = require("./services/pj");
var prompt_sync_1 = __importDefault(require("prompt-sync"));
var prompt = (0, prompt_sync_1.default)();
var contaPF1;
var contaPJ1;
try {
    contaPF1 = new pf_1.PF("João Silva", "joao.silva", "senha123", 1, 1000, new extrato_1.Extrato(), 12345678901);
}
catch (erro) {
    console.log(erro.message);
    process.exit(0);
}
try {
    contaPJ1 = new pj_1.PJ("Empresa X", "empresa.x", "senha456", 2, 1500, new extrato_1.Extrato(), 12345678000199);
}
catch (erro) {
    console.log(erro.message);
    process.exit(0);
}
var gerente1 = new gerente_1.Gerente("Ana Costa", "ana.costa", "senhaGerente", 987654321);
gerente1.addConta(contaPF1);
gerente1.addConta(contaPJ1);
var gerente2 = new gerente_1.Gerente("Carlos Lima", "carlos.lima", "senhaGerente2", 123456789);
gerente2.addConta(contaPJ1);
var contas = {
    1: contaPF1,
    2: contaPJ1
};
var gerentes = {
    "ana.costa": gerente1,
    "carlos.lima": gerente2
};
function loginCliente() {
    var usuario = prompt("Digite o usuário: ");
    var senha = prompt("Digite a senha: ");
    for (var _i = 0, _a = Object.values(contas); _i < _a.length; _i++) {
        var conta = _a[_i];
        if (conta.usuario === usuario && conta.verificarSenha(senha)) {
            console.log("Login bem-sucedido como Cliente");
            menuCliente(conta);
            return;
        }
    }
    console.log("Usuário ou senha incorretos.");
}
function loginGerente() {
    var usuario = prompt("Digite o usuário: ");
    var senha = prompt("Digite a senha: ");
    var gerente = gerentes[usuario];
    if (gerente && gerente.verificarSenha(senha)) {
        console.log("Login bem-sucedido como Gerente");
        menuGerente(gerente);
        return;
    }
    console.log("Usuário ou senha incorretos.");
}
function menuCliente(conta) {
    while (true) {
        console.log("Menu Cliente:");
        console.log("1 - Consultar saldo");
        console.log("2 - Realizar saque");
        console.log("3 - Realizar depósito");
        console.log("4 - Ver extratos");
        console.log("0 - Sair");
        var escolha = +prompt("Digite a opção desejada: ");
        switch (escolha) {
            case 1:
                console.log("Saldo atual: ".concat(conta.saldo));
                break;
            case 2:
                var valorSaque = +prompt("Digite o valor do saque: ");
                conta.saque(valorSaque);
                console.log("Saque realizado. Saldo atual: ".concat(conta.saldo));
                break;
            case 3:
                var valorDeposito = +prompt("Digite o valor do depósito: ");
                conta.deposito(valorDeposito);
                console.log("Dep\u00F3sito realizado. Saldo atual: ".concat(conta.saldo));
                break;
            case 4:
                conta.impExtratos();
                break;
            case 0:
                return;
            default:
                console.log("Opção inválida");
        }
    }
}
function menuGerente(gerente) {
    while (true) {
        console.log("Menu Gerente:");
        console.log("1 - Adicionar Conta");
        console.log("2 - Remover Conta");
        console.log("3 - Consultar todas as contas");
        console.log("4 - Consultar conta específica");
        console.log("0 - Sair");
        var escolha = +prompt("Digite a opção desejada: ");
        switch (escolha) {
            case 1:
                var tipoConta = prompt("Digite o tipo de conta (PF ou PJ): ");
                var nome = prompt("Digite o nome do titular: ");
                var usuario = prompt("Digite o nome de usuário: ");
                var senha = prompt("Digite a senha: ");
                var numeroContaNova = +prompt("Digite o número da conta: ");
                var saldo = +prompt("Digite o saldo inicial: ");
                var documento = tipoConta === "PF" ? +prompt("Digite o CPF: ") : +prompt("Digite o CNPJ: ");
                var extrato = new extrato_1.Extrato();
                if (tipoConta === "PF") {
                    var novaConta = new pf_1.PF(nome, usuario, senha, numeroContaNova, saldo, extrato, documento);
                    gerente.addConta(novaConta);
                    contas[numeroContaNova] = novaConta;
                }
                else if (tipoConta === "PJ") {
                    var novaConta = new pj_1.PJ(nome, usuario, senha, numeroContaNova, saldo, extrato, documento);
                    gerente.addConta(novaConta);
                    contas[numeroContaNova] = novaConta;
                }
                else {
                    console.log("Tipo de conta inválido.");
                }
                break;
            case 2:
                var numeroRemover = +prompt("Digite o número da conta a ser removida: ");
                gerente.removeConta(numeroRemover);
                delete contas[numeroRemover];
                console.log("Conta ".concat(numeroRemover, " removida."));
                break;
            case 3:
                gerente.impTodasContas();
                break;
            case 4:
                var numeroContaConsulta = +prompt("Digite o número da conta: ");
                gerente.impConta(numeroContaConsulta);
                break;
            case 0:
                return;
            default:
                console.log("Opção inválida");
        }
    }
}
do {
    console.log("-------------------------------------\n" +
        "|  Bem vindo ao Banco Aspili Getas  |\n" +
        "|  1 Login Cliente\n" +
        "|  2 Login Gerente\n" +
        "|  0 Sair\n");
    var escolha = +prompt("Digite a opção desejada: ");
    switch (escolha) {
        case 1:
            loginCliente();
            break;
        case 2:
            loginGerente();
            break;
        case 0:
            process.exit(0);
            break;
        default:
            console.log("Valor inválido");
    }
} while (true);
