const incremento = document.createElement('input')

function mensagemErro(entrada, msg) {
    const controle = entrada.parentElement
    controle.className = 'entradaErro'

    const spanErro = document.querySelector('#spanEntrada')
    spanErro.innerHTML = msg
}

// Cria o funcionamento do seletor

const select = document.querySelector('select')

select.addEventListener('change', () => {
    if (select.options[select.selectedIndex].value === 'valor1'){
        rodarCC()
    }
    else if (select.options[select.selectedIndex].value === 'valor2'){
        rodarBase64()
    }
})

// Faz rodar Base 64 quando selecionado


function rodarBase64() {
    const cod = document.querySelector('#cod')
    cod.setAttribute('onchange', 'codificar64()')

    const desc = document.querySelector('#desc')
    desc.setAttribute('onchange', 'descodificar64()')

    removeIncremento()
}
// Passa a função para a seleção dos Radio Buttons

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
// Codifica o Base 64
function codificarBase64() {
   const texto = document.querySelector('.entrada')
   const saida = document.querySelector('#textSaida')

   if (texto.value === ''){
    mensagemErro(texto, 'O campo deve ser preenchido')
   }
   else{
    var emBase64 = btoa(texto.value)
    saida.innerHTML = `${emBase64}`
   }
}
// Decodifica o Base 64
function descodificarBase64() {
    const texto = document.querySelector('.entrada')
    const saida = document.querySelector('#textSaida')
    
   if (texto.value === ''){
    mensagemErro(texto, 'O campo deve ser preenchido')
   }
   else{

    var emBase64 = atob(texto.value)
    saida.innerHTML = `${emBase64}`
   }
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

// Chama os radio Buttons
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

function removeIncremento() {
    const div = document.querySelector('.radioButtons')
  


    div.removeChild(incremento)
}


// Cria o seletor de incremento

function criarIncremento() {
    const div = document.querySelector('.radioButtons')

    incremento.setAttribute('class', 'incremento')
    incremento.setAttribute('type', 'number')
    incremento.setAttribute('min', '1')
    incremento.setAttribute('max', '25')

    div.appendChild(incremento)
}

// Codifica a Cifra de Cesar

function codificarCifraC() {

    let incremento = document.querySelector('.incremento').value
    let entrada = document.querySelector('.entrada').value

  
    let saida = ''

    for (var i = 0; i < entrada.length; i++) {
        
        let indiceLetra = entrada.charCodeAt(i)
        
        let indiceCodificado = ''
        // Verifica Letras Maiúsculas 
        if (indiceLetra >= 65 && indiceLetra <= 90) {
            indiceCodificado = ((`${indiceLetra}` - 65 + Number(`${incremento}`)) % 26) + 65
            let textoCodificado = String.fromCharCode(indiceCodificado)
            saida += textoCodificado
        }
        // Verifica letras minúsculas
        else if (indiceLetra >= 97 && indiceLetra <= 122) {
            indiceCodificado = ((`${indiceLetra}` - 97 + Number(`${incremento}`)) % 26) + 97
            let textoCodificado = String.fromCharCode(indiceCodificado)
            saida += textoCodificado
        }
         // Ignora caracteres especiais
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
    let entrada = document.querySelector('.entrada').value

    let saida = ''
    for (var i = 0; i < entrada.length; i++) {
        
        let indiceLetra = entrada.charCodeAt(i)
        
        let indiceDescodificado = ''
        // Verifica Letras Maiúsculas 
        if (indiceLetra >= 65 && indiceLetra <= 90) {
            indiceDescodificado = ((`${indiceLetra}` - 90 - Number(`${incremento}`)) % 26) + 90
        }
         // Verifica letras minúsculas
        else if (indiceLetra >= 97 && indiceLetra <= 122){
            indiceDescodificado = ((`${indiceLetra}` - 122 - Number(`${incremento}`)) % 26) + 122                 
        }
        // Ignora caracteres especiais
        else {
            saida += String.fromCharCode(indiceLetra)
        }
       let textoDescodificado = String.fromCharCode(indiceDescodificado)
        saida += textoDescodificado
    }
    let textSaida = document.querySelector('#textSaida')
    textSaida.innerHTML = saida
}