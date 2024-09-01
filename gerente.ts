import {Ilogin} from "./login";
import {Conta} from "./conta";
import {PF} from "./pf";
import {PJ} from "./pj";

export class Gerente <C extends PF|PJ> implements Ilogin {
    public _nome:string
    public _usuario:string
    private _senha:string
    private _telefone:number
    private _contaSupervisao:C[]=[]

    constructor(nome:string,usuario:string,senha:string,telefone:number) {
        this._nome=nome;
        this._usuario=usuario;
        this._senha=senha;
        this._telefone=telefone;
    }

    get nome():string{
        return this._nome;
    }

    set nome(nome:string){
        this._nome=nome;
    }

    get usuario():string{
        return this._usuario;
    }

    set usuario(usuario:string){
        this._usuario=usuario;
    }

    get senha():string{
        return this._senha;
    }

    set senha(senha:string){
        this._senha=senha;
    }

    public verificarSenha(senha: string): boolean {
        return this._senha === senha;
    }

    get telefone():number{
        return this._telefone;
    }

    set telefone(telefone:number){
        this._telefone=telefone;
    }

    private findIndiceConta(numeroConta: number): number {
        return this._contaSupervisao.findIndex(conta => conta.numeroConta === numeroConta);
    }

    public impTodasContas():void{
        let vet:C[]=this._contaSupervisao;

        for(let i:number=0;i<vet.length;i++){
            console.log(`Nome: ${vet[i].nome} \t Numero da Conta: ${vet[i].numeroConta}`);
        }
    }

    public impConta(numeroConta:number):void{
        let indice:number=this.findIndiceConta(numeroConta);
        console.log(`Nome: ${this._contaSupervisao[indice].nome}\tNumero da Conta: ${this._contaSupervisao[indice].numeroConta}`);
    }

    public addConta(conta:C):void{
        this._contaSupervisao.push(conta);
    }

    public removeConta(conta:C):void{
        this._contaSupervisao.pop();
    }
}