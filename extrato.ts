export class Extrato {
    private transacoes: { tipo: string, valor: number }[] = [];

    public registrarTransacao(tipo: string, valor: number,saldo:number): void {
        if (tipo === 'saque') {
            saldo -= valor;
        } else if (tipo === 'deposito') {
            saldo += valor;
        }
        this.transacoes.push({ tipo, valor });
    }

    public obterHistoricoTransacoes(): { tipo: string, valor: number }[] {
        return this.transacoes;
    }
}