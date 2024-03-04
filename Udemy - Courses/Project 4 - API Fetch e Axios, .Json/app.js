/*fetch('pessoas.json')
    .then(resposta => resposta.json())
    .then(json => carregaElementosNaPagina(json));*/

axios('pessoas.json')
    .then(resposta => carregaElementosNaPagina(resposta.data))
function carregaElementosNaPagina(json){
    const table = document.createElement('table');
    
    const tr = document.createElement('tr');
    let th1 = document.createElement('th');
    th1.innerHTML = "Nome";
    tr.appendChild(th1);

    let th2 = document.createElement('th');
    th2.innerHTML = "Idade";
    tr.appendChild(th2);

    let th3 = document.createElement('th');
    th3.innerHTML = "Salário";
    tr.appendChild(th3);
    table.appendChild(tr);

    for (let pessoa of json){
        const tr = document.createElement('tr');
        let td1 = document.createElement('td');
        td1.innerHTML = pessoa.nome;
        tr.appendChild(td1);

        let td2 = document.createElement('td');
        td2.innerHTML = pessoa.idade;
        tr.appendChild(td2);
        
        let td3 = document.createElement('td');
        td3.innerHTML = pessoa.salario;
        tr.appendChild(td3);

        table.appendChild(tr);
    }

    const resultado = document.querySelector('.resultado');
    resultado.appendChild(table);
}
