"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.PF = void 0;
var conta_1 = require("./conta");
var PF = /** @class */ (function (_super) {
    __extends(PF, _super);
    function PF(nome, usuario, senha, numeroConta, saldo, extrato, cpf) {
        var _this = _super.call(this, nome, usuario, senha, numeroConta, saldo, extrato) || this;
        _this.validaCPF(cpf);
        _this._cpf = cpf;
        return _this;
    }
    Object.defineProperty(PF.prototype, "cpf", {
        get: function () {
            return this._cpf;
        },
        set: function (cpf) {
            this.validaCPF(cpf);
            this._cpf = cpf;
        },
        enumerable: false,
        configurable: true
    });
    PF.prototype.validaCPF = function (cpf) {
        var tam = cpf.toString().length;
        if (tam !== 11) {
            throw new Error("O cpf tem que ter 11 digitos");
        }
    };
    return PF;
}(conta_1.Conta));
exports.PF = PF;
