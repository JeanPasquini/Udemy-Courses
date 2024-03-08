const path = require ('path');
const caminhoArquivo = path.resolve(__dirname, '.','teste.json');
const escreve = require('./Modules,/escrever')
const ler = require('./Modules,/ler')

async function lerArquivo(caminho){
    const dadoss = await ler(caminho);
    renderizaDados = (dados = dadoss) =>{
        dados = JSON.parse(dados);
        dados.forEach(val => console.log(`Nome: ${val.nome} ${val.sobrenome} \nIdade: ${val.idade} anos\nCidade: ${val.cidade}`))
    };
    renderizaDados();
}

function novoDados(dados){
    escreve(caminhoArquivo, dados);
}

function escrevaPessoa(nome, sobrenome, idade, cidade){
    const pessoa = [
        {
            nome: nome,
            sobrenome : sobrenome,
            idade: idade,
            cidade: cidade
        },
    ]
    const json = JSON.stringify(pessoa, '', 2);    
    novoDados(json);
};

escrevaPessoa("Jean", "Pasquini", 19, "São Paulo - SP");
lerArquivo(caminhoArquivo);