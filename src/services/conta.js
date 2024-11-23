"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta = void 0;
var Conta = /** @class */ (function () {
    function Conta(nome, usuario, senha, numeroConta, saldo, extrato) {
        this._nome = nome;
        this._usuario = usuario;
        this._senha = senha;
        this._numeroConta = numeroConta;
        this._saldo = saldo;
        this._extrato = extrato;
    }
    Object.defineProperty(Conta.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        set: function (nome) {
            this._nome = nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Conta.prototype, "usuario", {
        get: function () {
            return this._usuario;
        },
        set: function (usuario) {
            this._usuario = usuario;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Conta.prototype, "senha", {
        get: function () {
            return this._senha;
        },
        set: function (senha) {
            this._senha = senha;
        },
        enumerable: false,
        configurable: true
    });
    Conta.prototype.verificarSenha = function (senha) {
        return this._senha === senha;
    };
    Object.defineProperty(Conta.prototype, "numeroConta", {
        get: function () {
            return this._numeroConta;
        },
        set: function (numeroConta) {
            this._numeroConta = numeroConta;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Conta.prototype, "saldo", {
        get: function () {
            return this._saldo;
        },
        set: function (saldo) {
            this._saldo = saldo;
        },
        enumerable: false,
        configurable: true
    });
    Conta.prototype.addExtrato = function (tipo, valor) {
        this._saldo = this._extrato.registrarTransacao(tipo, valor, this._saldo);
    };
    Conta.prototype.impExtratos = function () {
        var vet = this._extrato.obterHistoricoTransacoes();
        for (var i = 0; i < vet.length; i++) {
            console.log(vet[i]);
        }
        console.log("Saldo atual: ".concat(this._saldo));
    };
    Conta.prototype.saque = function (valor) {
        this.addExtrato("saque", valor);
    };
    Conta.prototype.deposito = function (valor) {
        this.addExtrato("deposito", valor);
    };
    return Conta;
}());
exports.Conta = Conta;
