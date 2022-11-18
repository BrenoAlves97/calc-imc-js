const btnCalculate = document.querySelector('#btn-calculate')
const btnReset = document.querySelector('#btn-reset-values');

btnCalculate.addEventListener('click', calculateImc);
btnCalculate.addEventListener('click', isInputEmpty);

btnReset.addEventListener('click', () => {
    const heightElement = document.querySelector('#height');
    const weightElement = document.querySelector('#weight');
    const resultImc = document.querySelector('#result');

    heightElement.value = '';
    weightElement.value = '';
    resultImc.textContent = '';
});

function isInputEmpty() {

    const heightElement = document.querySelector('#height').value;
    const weightElement = document.querySelector('#weight').value;

    if (!heightElement || !weightElement) {
        // document.querySelector('#height').classList.add('error');
        // document.querySelector('#weight').classList.add('error');
        window.alert('Por gentileza, preencha os campos antes de calcular!')
    } else {
        return;
    }
}


function calculateImc() {
    const heightElement = document.querySelector('#height').value / 100;
    const weightElement = document.querySelector('#weight').value;
    const resultImc = document.querySelector('#result');

    const formulaImc = weightElement / (heightElement * heightElement);

    if (formulaImc <= 24.9 && formulaImc >= 18.5) {
        resultImc.innerText = `Parabéns! seu IMC está ${formulaImc.toFixed(2)}. Você está com o peso normal.`
    } else if (formulaImc >= 25.0 && formulaImc <= 29.9) {
        resultImc.innerText = `Sobrepeso! seu IMC está ${formulaImc.toFixed(2)}. Alguns quilos a mais já são suficientes para que algumas pessoas desenvolvam doenças associadas, como diabetes e hipertensão.`
    } else if (formulaImc > 30.0 && formulaImc < 40.0) {
        resultImc.innerText = `Obesidade! ${formulaImc.toFixed(2)}. O excesso de peso é fator de risco para desenvolvimento de outros problemas de saúde.`
    } else if (formulaImc > 40.0) {
        resultImc.innerText = `Obesidade grave! seu IMC está ${formulaImc.toFixed(2)}. Ao atingir este nivel de IMC, o risco de doenças associadas está entre alto e muito alto.`
    } else if (formulaImc < 18.5 && formulaImc > 0.0) {
        resultImc.innerText = `Cuidado! Seu IMC está ${formulaImc.toFixed(2)}. Estar abaixo do peso eleva risco de vida mais do que obesidade.`
    } 
}



