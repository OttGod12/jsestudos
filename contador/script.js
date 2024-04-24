const inputTexto = document.querySelector("[input-texto]")
const btnContar = document.querySelector("[btn-contar]")
const divContador = document.querySelector("[txt-contador]")

let tipoContagem = "caracteres"



const handleInputTexto = (evento) => {
    
    
}

function handleBtnContar(evento){
    if(tipoContagem == "caracteres"){
        evento.target.innerText = "Contar Palavras"
        tipoContagem = "palavras"
    } else {
        evento.target.innerText = "Contar Caracteres"
        tipoContagem= "caracteres"
    }
}



inputTexto.addEventListener("input", (evento) => {

    // inputTexto.value.trim().split(/\s+/)

    input = evento.target.value
    caractere = input.split('')
    caractere = String(caractere).replaceAll(",","")
    palavras = input.split(' ')

    switch (btnContar.innerText) {
        case "Contar Palavras":
            divContador.innerText = String(caractere).length + " caracteres"


            break;
    
        case "Contar Caracteres":

            divContador.innerText = (palavras.length)-1 + " palavras"

            break;
        
    }
})






btnContar.addEventListener("click", handleBtnContar)
inputTexto.addEventListener("input", handleInputTexto)