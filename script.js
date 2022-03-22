// Carne - 400g por pessoa / + de 6 horas - 650g
// Cerveja - 1200ml por pessoa / + de 6 horas - 2000ml
// Refrigerante/água - 1000ml por pessoa / + de 6 hras 1500ml

// Crianças valem por 0,5

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular() {
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qtdTotalCarne = carnePorPessoa(duracao) * adultos + (carnePorPessoa(duracao)/2 * criancas);
    let qtdTotalCerveja = cervejaPorPessoa(duracao) * adultos;
    let qtdTotalBebidas = bebidasPorPessoa(duracao) * adultos + (bebidasPorPessoa(duracao)/2 * criancas);

    resultado.innerHTML = `<p>${qtdTotalCarne/1000}kg de carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalCerveja/355)} latas de cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalBebidas/2000)} garrafas de bebida</p>`
}

function carnePorPessoa(duracao) {
    if(duracao >= 6) return 650;
    return 400;
}

function cervejaPorPessoa(duracao) {
    if(duracao >= 6) return 2000;
    return 1200;
}

function bebidasPorPessoa(duracao) {
    if(duracao >= 6) return 1500;
    return 1000;
}