import { Conta } from "./conta";
import { Extrato } from "./extrato";
import { Gerente } from "./gerente";
import { PF } from "./pf";
import { PJ } from "./pj";
import promptSync from 'prompt-sync'; // importa um módulo que captura entradas do usuário

const prompt = promptSync(); // cria uma instância do prompt-sync

let contaPF1: PF | undefined;
let contaPJ1: PJ | undefined;

// Criação de contas
try {
    contaPF1 = new PF("João Silva", "joao.silva", "senha123", 1, 1000, new Extrato(), 12345678901);
}
catch (erro: any) {
    console.log(erro.message);
    process.exit(0);
}

try {
    contaPJ1 = new PJ("Empresa X", "empresa.x", "senha456", 2, 1500, new Extrato(), 12345678000199);
}
catch (erro: any) {
    console.log(erro.message);
    process.exit(0);
}

// Criação de gerentes
const gerente1 = new Gerente<PF | PJ>("Ana Costa", "ana.costa", "senhaGerente", 987654321);
gerente1.addConta(contaPF1); // Adiciona a conta PF para o gerente
gerente1.addConta(contaPJ1); // Adiciona a conta PJ para o gerente
const gerente2 = new Gerente<PF | PJ>("Carlos Lima", "carlos.lima", "senhaGerente2", 123456789);
gerente2.addConta(contaPJ1); // Adiciona a conta PJ para o gerente

// Instanciação dos objetos para a simulação

const contas: { [numeroConta: number]: Conta } = {
    1: contaPF1,
    2: contaPJ1
}



const gerentes: { [usuario: string]: Gerente<PF | PJ> } = {
    "ana.costa": gerente1,
    "carlos.lima": gerente2
};

// Funções de login e menus
function loginCliente(): void {
    const usuario = prompt("Digite o usuário: ");
    const senha = prompt("Digite a senha: ");

    for (const conta of Object.values(contas)) {
        if (conta.usuario === usuario && conta.verificarSenha(senha)) {
            console.log("Login bem-sucedido como Cliente");
            menuCliente(conta);
            return;
        }
    }
    console.log("Usuário ou senha incorretos.");
}

function loginGerente(): void {
    const usuario = prompt("Digite o usuário: ");
    const senha = prompt("Digite a senha: ");

    const gerente = gerentes[usuario];
    if (gerente && gerente.verificarSenha(senha)) {
        console.log("Login bem-sucedido como Gerente");
        menuGerente(gerente);
        return;
    }
    console.log("Usuário ou senha incorretos.");
}

function menuCliente(conta: Conta): void {
    while (true) {
        console.log("Menu Cliente:");
        console.log("1 - Consultar saldo");
        console.log("2 - Realizar saque");
        console.log("3 - Realizar depósito");
        console.log("4 - Ver extratos");
        console.log("0 - Sair");

        const escolha = +prompt("Digite a opção desejada: ");

        switch (escolha) {
            case 1:
                console.log(`Saldo atual: ${conta.saldo}`);
                break;
            case 2:
                const valorSaque = +prompt("Digite o valor do saque: ");
                conta.saque(valorSaque);
                console.log(`Saque realizado. Saldo atual: ${conta.saldo}`);
                break;
            case 3:
                const valorDeposito = +prompt("Digite o valor do depósito: ");
                conta.deposito(valorDeposito);
                console.log(`Depósito realizado. Saldo atual: ${conta.saldo}`);
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

function menuGerente(gerente: Gerente<PF | PJ>): void {
    while (true) {
        console.log("Menu Gerente:");
        console.log("1 - Adicionar Conta");
        console.log("2 - Remover Conta");
        console.log("3 - Consultar todas as contas");
        console.log("4 - Consultar conta específica");
        console.log("0 - Sair");

        const escolha = +prompt("Digite a opção desejada: ");

        switch (escolha) {
            case 1:
                const tipoConta = prompt("Digite o tipo de conta (PF ou PJ): ");
                const nome = prompt("Digite o nome do titular: ");
                const usuario = prompt("Digite o nome de usuário: ");
                const senha = prompt("Digite a senha: ");
                const numeroContaNova = +prompt("Digite o número da conta: "); // Renomeei para numeroContaNova
                const saldo = +prompt("Digite o saldo inicial: ");
                const documento = tipoConta === "PF" ? +prompt("Digite o CPF: ") : +prompt("Digite o CNPJ: ");
                const extrato = new Extrato();

                if (tipoConta === "PF") {
                    const novaConta = new PF(nome, usuario, senha, numeroContaNova, saldo, extrato, documento);
                    gerente.addConta(novaConta);
                    contas[numeroContaNova] = novaConta;
                } else if (tipoConta === "PJ") {
                    const novaConta = new PJ(nome, usuario, senha, numeroContaNova, saldo, extrato, documento);
                    gerente.addConta(novaConta);
                    contas[numeroContaNova] = novaConta;
                } else {
                    console.log("Tipo de conta inválido.");
                }
                break;
            case 2:
                const numeroRemover = +prompt("Digite o número da conta a ser removida: ");
                gerente.removeConta(numeroRemover);
                delete contas[numeroRemover];
                console.log(`Conta ${numeroRemover} removida.`);
                break;
            case 3:
                gerente.impTodasContas();
                break;
            case 4:
                const numeroContaConsulta = +prompt("Digite o número da conta: "); // Renomeei para numeroContaConsulta
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

    const escolha = +prompt("Digite a opção desejada: ");

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
