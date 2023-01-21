

// Cria o funcionamento do selector

const select = document.querySelector('select')

select.addEventListener('change', () => {
    if (select.options[select.selectedIndex].value === 'valor1'){
        rodarCC()
    }
    else if (select.options[select.selectedIndex].value === 'valor2'){
        rodarBase64()
    }
})

// Faz a criptografia do Base 64


function rodarBase64() {
    const cod = document.querySelector('#cod')
    cod.setAttribute('onchange', 'codificar64()')

    const desc = document.querySelector('#desc')
    desc.setAttribute('onchange', 'descodificar64()')
}

function codificar64() {

    const btn = document.querySelector('#button')
    btn.value = 'Codificar'
    btn.setAttribute('onclick', 'codificarBase64()')
}

function descodificar64() {
    const btn =  document.querySelector('#button')
    btn.value = 'Descodificar'
    btn.setAttribute('onclick', 'descodificarBase64()')

}

function codificarBase64() {
   const texto = document.querySelector('#entrada').value
   const saida = document.querySelector('#textSaida')
   var emBase64 = btoa(texto)
    saida.innerHTML = `${emBase64}`
// alert('socorro')
}

function descodificarBase64() {
    const texto = document.querySelector('#entrada').value
    const saida = document.querySelector('#textSaida')
    var emBase64 = atob(texto)
    saida.innerHTML = `${emBase64}`
}

// Cifra de César
// Faz rodar a CC
function rodarCC() {

    criarIncremento()

    const cod = document.querySelector('#cod')
    cod.setAttribute('onchange', 'codificarCC()')

    const desc = document.querySelector('#desc')
    desc.setAttribute('onchange', 'descodificarCC()')
}
// Chama os radio Buttons e passa a
function codificarCC() {

    const btn = document.querySelector('#button')
    btn.value = 'Codificar'
    btn.setAttribute('onclick', 'codificarCifraC()')
}

function descodificarCC() {
    const btn =  document.querySelector('#button')
    btn.value = 'Descodificar'
    btn.setAttribute('onclick', 'descodificarCifraC()')

}


// Cria o seletor de incremento

function criarIncremento() {
    const div = document.querySelector('.radioButtons')
    const incremento = document.createElement('input')
    incremento.setAttribute('class', 'incremento')
    incremento.setAttribute('type', 'number')
    incremento.setAttribute('min', '0')
    incremento.setAttribute('max', '26')

    div.appendChild(incremento)
}

// Codifica a Cifra de Cesar

function codificarCifraC() {

    let incremento = document.querySelector('.incremento').value
    let entrada = document.querySelector('#entrada').value
    console.log(`Incremento = ${incremento}`)
    console.log(`Entrada = ${entrada}`)
    console.log(`========================================`)
  
    let saida = ''

    for (var i = 0; i < entrada.length; i++) {
        
        var indiceLetra = entrada.charCodeAt(i)
        
        let indiceCodificado = ''

        if (indiceLetra >= 65 && indiceLetra <= 90) {
            indiceCodificado = ((`${indiceLetra}` - 65 + `${incremento}`) % 26) + 65
            let textoCodificado = String.fromCharCode(indiceCodificado)
            saida += textoCodificado
        }
        else if (indiceLetra >= 97 && indiceLetra <= 122) {
            indiceCodificado = (`${indiceLetra}` - 97 +`${incremento}` % 26) + 97
            let textoCodificado = String.fromCharCode(indiceCodificado)
            saida += textoCodificado
        }
        else {
            saida += String.fromCharCode(indiceLetra)
        }
    }
    let textSaida = document.querySelector('#textSaida')
    textSaida.innerHTML = saida
    
}

//Descodifica a Cifra de César

function descodificarCifraC() {

    let incremento = document.querySelector('.incremento').value
    let entrada = document.querySelector('#entrada').value

    let saida = ''
    for (var i = 0; i < entrada.length; i++) {
        
        let indiceLetra = entrada.charCodeAt(i)
        
        let indiceDescodificado = ''

        if (indiceLetra >= 65 && indiceLetra <= 90) {
            indiceDescodificado = (`${indiceLetra}` - 65 - `${incremento}` % 26) + 65
        }
        else if (indiceLetra >= 97 && indiceLetra <= 122){
            indiceDescodificado = (`${indiceLetra}` - 97 - `${incremento}` % 26) + 97                 
        }
        else {
            saida += String.fromCharCode(indiceLetra)
        }
       let textoDescodificado = String.fromCharCode(indiceDescodificado)
        saida += textoDescodificado
    }
    let textSaida = document.querySelector('#textSaida')
    textSaida.innerHTML = saida
}