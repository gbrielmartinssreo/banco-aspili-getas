"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Extrato = void 0;
var Extrato = /** @class */ (function () {
    function Extrato() {
        this.transacoes = [];
    }
    Extrato.prototype.registrarTransacao = function (tipo, valor, saldoAnt) {
        if (tipo === 'saque') {
            saldoAnt -= valor;
        }
        else if (tipo === 'deposito') {
            saldoAnt += valor;
        }
        this.transacoes.push({ tipo: tipo, valor: valor, saldoAnt: saldoAnt });
        return saldoAnt;
    };
    Extrato.prototype.obterHistoricoTransacoes = function () {
        return this.transacoes;
    };
    return Extrato;
}());
exports.Extrato = Extrato;
