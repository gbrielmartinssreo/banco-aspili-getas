import {Conta} from "./conta";
import {Ilogin} from "./login";
import {Extrato} from "./extrato";

export class PJ extends Conta{
    private _cnpj:number;

    constructor(nome: string, usuario: string, senha: string, numeroConta: number, saldo: number, extrato: Extrato,cnpj:number) {
        super(nome,usuario,senha,numeroConta,saldo,extrato);
        this.validaCNPJ(cnpj);
        this._cnpj=cnpj;
    }

    get cnpj():number{
        return this._cnpj;
    }

    set cnpj(cnpj:number){
        this.validaCNPJ(cnpj);
        this._cnpj=cnpj;
    }

    private validaCNPJ(cnpj:number):void{
        let tam:number=cnpj.toString().length;
        if(tam!==14){
            throw new Error("O cnpj tem que ter 14 digitos")
        }
    }
}