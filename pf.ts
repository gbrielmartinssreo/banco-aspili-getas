import {Conta} from "./conta";
import {Ilogin} from "./login";
import {Extrato} from "./extrato";

export class PF extends Conta{
    private _cpf:number;

    constructor(nome: string, usuario: string, senha: string, numeroConta: number, saldo: number, extrato: Extrato,cpf:number) {
        super(nome,usuario,senha,numeroConta,saldo,extrato);
        this.validaCPF(cpf);
        this._cpf=cpf;
    }

    get cpf():number{
        return this._cpf;
    }

    set cpf(cpf:number){
        this.validaCPF(cpf);
        this._cpf=cpf;
    }

    private validaCPF(cpf:number):void{
        let tam:number=cpf.toString().length;
        if(tam!==11){
            throw new Error("O cpf tem que ter 11 digitos")
        }
    }
}