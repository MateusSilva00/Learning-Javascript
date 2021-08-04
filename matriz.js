function ExibirMatriz(tam){
    let linha = "";

    for(let i = 0; i < tam; i++){
        for(let j = 0; j < tam; j++){
            linha += " * "
        }
        console.log(linha);
        linha = "";
    }
}

const prompt = require('prompt-sync')();

// let size = prompt('Qual o tamanho da matriz: ');
// ExibirMatriz(size);

let matriz = [[15, 4 ,7],
            [12, 3, 7],
            [44, 25, 63]];


for(let i = 0; i < matriz.length; i++){
    console.log(matriz[i]);
}