import { Ilogin } from "./login";
import { Extrato } from "./extrato";

export abstract class Conta implements Ilogin {
    public _nome: string;
    public _usuario: string;
    protected _senha: string;
    protected _numeroConta: number;
    protected _saldo: number;
    protected _extrato: Extrato;

    constructor(nome: string, usuario: string, senha: string, numeroConta: number, saldo: number, extrato: Extrato) {
        this._nome = nome;
        this._usuario = usuario;
        this._senha = senha;
        this._numeroConta = numeroConta;
        this._saldo = saldo;
        this._extrato = extrato;
    }

    get nome(): string {
        return this._nome;
    }
    protected set nome(nome: string) {
        this._nome = nome;
    }

    get usuario(): string {
        return this._usuario;
    }
    protected set usuario(usuario: string) {
        this._usuario = usuario;
    }

    protected get senha(): string {
        return this._senha;
    }
    protected set senha(senha: string) {
        this._senha = senha;
    }

    public verificarSenha(senha: string): boolean {
        return this._senha === senha;
    }

    get numeroConta():number{
        return this._numeroConta;
    }

    protected set numeroConta(numeroConta:number){
        this._numeroConta=numeroConta;
    }

    get saldo():number{
        return this._saldo;
    }

    protected set saldo(saldo:number){
        this._saldo=saldo;
    }

    private addExtrato(tipo:string,valor:number):void{
        this._saldo=this._extrato.registrarTransacao(tipo,valor,this._saldo);
    }

    public impExtratos():void{
        let vet:{tipo: string, valor: number }[]=this._extrato.obterHistoricoTransacoes();

        for(let i=0;i<vet.length;i++){
            console.log(vet[i]);
        }
        console.log(`Saldo atual: ${this._saldo}`)
    }

    public saque(valor:number):void{
        this.addExtrato("saque",valor);
    }

    public deposito(valor:number):void{
        this.addExtrato("deposito",valor);
    }
}
