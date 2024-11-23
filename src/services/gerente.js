"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gerente = void 0;
var Gerente = /** @class */ (function () {
    function Gerente(nome, usuario, senha, telefone) {
        this._contaSupervisao = [];
        this._nome = nome;
        this._usuario = usuario;
        this._senha = senha;
        this._telefone = telefone;
    }
    Object.defineProperty(Gerente.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        set: function (nome) {
            this._nome = nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Gerente.prototype, "usuario", {
        get: function () {
            return this._usuario;
        },
        set: function (usuario) {
            this._usuario = usuario;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Gerente.prototype, "senha", {
        get: function () {
            return this._senha;
        },
        set: function (senha) {
            this._senha = senha;
        },
        enumerable: false,
        configurable: true
    });
    Gerente.prototype.verificarSenha = function (senha) {
        return this._senha === senha;
    };
    Object.defineProperty(Gerente.prototype, "telefone", {
        get: function () {
            return this._telefone;
        },
        set: function (telefone) {
            this._telefone = telefone;
        },
        enumerable: false,
        configurable: true
    });
    Gerente.prototype.findIndiceConta = function (numeroConta) {
        return this._contaSupervisao.findIndex(function (conta) { return conta.numeroConta === numeroConta; });
    };
    Gerente.prototype.impTodasContas = function () {
        var vet = this._contaSupervisao;
        for (var i = 0; i < vet.length; i++) {
            console.log("Nome: ".concat(vet[i].nome, " \t Numero da Conta: ").concat(vet[i].numeroConta));
        }
    };
    Gerente.prototype.impConta = function (numeroConta) {
        var indice = this.findIndiceConta(numeroConta);
        console.log("Nome: ".concat(this._contaSupervisao[indice].nome, "\tNumero da Conta: ").concat(this._contaSupervisao[indice].numeroConta));
    };
    Gerente.prototype.addConta = function (conta) {
        this._contaSupervisao.push(conta);
    };
    Gerente.prototype.removeConta = function (numeroConta) {
        var indice = this.findIndiceConta(numeroConta);
        if (indice !== -1) {
            this._contaSupervisao.splice(indice, 1);
            console.log("Conta n\u00FAmero ".concat(numeroConta, " removida."));
        }
        else {
            console.log("Conta não encontrada.");
        }
    };
    return Gerente;
}());
exports.Gerente = Gerente;
