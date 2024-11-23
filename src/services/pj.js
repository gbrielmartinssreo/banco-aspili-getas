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
exports.PJ = void 0;
var conta_1 = require("./conta");
var PJ = /** @class */ (function (_super) {
    __extends(PJ, _super);
    function PJ(nome, usuario, senha, numeroConta, saldo, extrato, cnpj) {
        var _this = _super.call(this, nome, usuario, senha, numeroConta, saldo, extrato) || this;
        _this.validaCNPJ(cnpj);
        _this._cnpj = cnpj;
        return _this;
    }
    Object.defineProperty(PJ.prototype, "cnpj", {
        get: function () {
            return this._cnpj;
        },
        set: function (cnpj) {
            this.validaCNPJ(cnpj);
            this._cnpj = cnpj;
        },
        enumerable: false,
        configurable: true
    });
    PJ.prototype.validaCNPJ = function (cnpj) {
        var tam = cnpj.toString().length;
        if (tam !== 14) {
            throw new Error("O cnpj tem que ter 14 digitos");
        }
    };
    return PJ;
}(conta_1.Conta));
exports.PJ = PJ;
