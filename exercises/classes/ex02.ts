class ContaBancaria {

    private saldo: number;

    constructor(saldoInicial: number = 0) {
        this.saldo = saldoInicial
    }

    public depositar(valor: number): void {

        if(valor > 0) {

            this.saldo += valor;
            console.log(`Voce depositou ${valor}$. Novo saldo: ${this.saldo}$ \n`)

        } else {

            console.log('Voce precisa depositar um valor maior que 0 \n')
        }

    };

    public sacar(valoraSacar: number): void {

        if(this.saldo < 0) {

            console.log(`Voce nao tem dinheiro para sacar \n saldo atual: ${this.saldo} reais \n`);

        } else if(valoraSacar > this.saldo) {

            console.log(`Não é possivel sacar ${valoraSacar}$, Voce so tem ${this.saldo}$ \n `)

        } else {

            this.saldo -= valoraSacar;
            console.log(`Voce sacou ${valoraSacar}. Novo saldo: ${this.saldo}$ \n`)
        }

    };    

    public verSaldo(): void {
        console.log(`Saldo atual: ${this.saldo}$`)
    };

};

const minhaConta = new ContaBancaria();

minhaConta.verSaldo()
minhaConta.depositar(10)
minhaConta.sacar(11)
minhaConta.verSaldo()

