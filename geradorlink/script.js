const btnCopiar = document.querySelector("[btnCopiar]");
const btnMandar = document.querySelector("[btnMandar]");
const numeroTel = document.querySelector("[numeroTel]");
const p = document.querySelector("[p]")
const resultado = document.querySelector("[inputResult]")
const divResult = document.querySelector("[divResultado]")


const copiar  = (evento) => {
  divResult.style = "display: block;"
  resultado.value = "https://wa.me/55" + numeroTel.value

} 


const mandar  = (evento) => {
  window.open( "https://wa.me/55" + numeroTel.value)
  
} 



const campos = (evento) => {
  numeroTel.value = numeroTel.value.replace(/\D/g, "")
  if(numeroTel.value.length == 11){
    numeroTel.value = numeroTel.value.replace(/(\d{2})(\d)/, "($1) $2" )
    numeroTel.value = numeroTel.value.replace(/(\d)(\d{4})$/, "$1-$2" )
    numeroTel.style = "color: green"

  }
  
} 



const txtResultado  = (evento) => {
  navigator.clipboard.writeText("https://wa.me/55" + numeroTel.value)
  p.innerText = "Link copiado para a área de tranferência"
} 





btnCopiar.addEventListener("click", copiar)
btnMandar.addEventListener("click", mandar)
numeroTel.addEventListener("input", campos)
resultado.addEventListener("click", txtResultado)
