function verificarMaior() {
    let outSaida = document.getElementById('outSaida')

    let primeiroNumero = Number(prompt('Digite o primeiro número'))
    let segundoNumero = Number(prompt('Digite o segundo número'))

    if (primeiroNumero > segundoNumero) {
        outSaida.innerHTML = `Comparando ${primeiroNumero} e ${segundoNumero}, o maior número é ${primeiroNumero}.`
   } else if (segundoNumero > primeiroNumero) {
        outSaida.innerHTML = `Comparando ${primeiroNumero} e ${segundoNumero}, o maior número é ${segundoNumero}.`
   } else if (primeiroNumero === segundoNumero) {
        outSaida.innerHTML = `Comparando ${primeiroNumero} e ${segundoNumero}, ambos são iguais.`
   }
}
let btVerificar = document.getElementById('btVerificar')
btVerificar.addEventListener('click', verificarMaior)