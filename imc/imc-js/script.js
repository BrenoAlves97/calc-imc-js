const btnCalculate = document.querySelector('#btn-calculate')

btnCalculate.addEventListener('click', calculateImc)
btnCalculate.addEventListener('click', resetResult)

function calculateImc() {
    let heightElement = document.querySelector('#height').value / 100 
    let weightElement = document.querySelector('#weight').value
    let resultImc = document.querySelector('#result')

    let formulaImc = weightElement / (heightElement * heightElement)

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
    } else if (heightElement === '' && weightElement === '') {
        resetResult();
    }
    else {
        return;
    }

    heightElement.innerText = ''
    weightElement.innerText = ''
}


// function resetResult() {
//     let heightElement = document.querySelector('#height').value
//     let weightElement = document.querySelector('#weight').value
//     let resultImc = document.querySelector('#result')

//     if (heightElement === '' && weightElement === '') {
//         resultImc.innerText = null
//     } else {
//         return
//     }
// }
