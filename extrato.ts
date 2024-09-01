export class Extrato {
    private transacoes: { tipo: string, valor: number,saldoAnt:number }[] = [];

    public registrarTransacao(tipo: string, valor: number,saldoAnt:number): number {
        if (tipo === 'saque') {
            saldoAnt -= valor;
        } else if (tipo === 'deposito') {
            saldoAnt += valor;
        }
        this.transacoes.push({ tipo, valor, saldoAnt});

        return saldoAnt;
    }

    public obterHistoricoTransacoes(): { tipo: string, valor: number}[] {
        return this.transacoes;
    }
}