class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome,
        this.sobrenome = sobrenome;
    }

    Fala(){
        console.log(`${this.nome} ${this.sobrenome} esta falando!`);
    }
}

exports.P = Pessoa;