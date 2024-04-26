const inputTexto = document.querySelector("[input-texto]")
const btnContar = document.querySelector("[btn-contar]")
const divContador = document.querySelector("[txt-contador]")

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

    

    input = evento.target.value
    caractere = input.split('')
    caractere = inputTexto.value.trim().split(/\s+/)
    palavras = inputTexto.value.trim().split(/\s+/)

    switch (btnContar.innerText) {
        case "Contar Palavras":
            divContador.innerText = String(caractere).length + " caracteres"


            break;
    
        case "Contar Caracteres":

            divContador.innerText = (palavras.length) + " palavras"

            break;
        
    }
})






btnContar.addEventListener("click", handleBtnContar)
inputTexto.addEventListener("input", handleInputTexto)