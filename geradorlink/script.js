const btnCopiar = document.querySelector("[btnCopiar]");
const btnMandar = document.querySelector("[btnMandar]");
const numeroTel = document.querySelector("[numeroTel]");
const p = document.querySelector("[p]")
const resultado = document.querySelector("[inputResult]")
const divResult = document.querySelector("[divResultado]")



const copiar  = (evento) => {
  const numLimpo = numeroTel.value.replace(/[-\s()]/g, "");
  divResult.style = "display: block;"
  linkGerado = "https://wa.me/55" + numLimpo
  resultado.value = linkGerado
  console.log(linkGerado)
} 


const mandar  = (evento) => {
  window.open(linkGerado)
  
} 



const campos = (evento) => {
  numeroTel.value = numeroTel.value.replace(/\D/g, "")
  if(numeroTel.value.length == 11){
    numeroTel.value = numeroTel.value.replace(/(\d{2})(\d)/, "($1) $2" )
    numeroTel.value = numeroTel.value.replace(/(\d)(\d{4})$/, "$1-$2" )
    numeroTel.style = "color: green"

  } 
  else(
    numeroTel.style = "color = black"
  )

  
} 



const txtResultado  = (evento) => {
  navigator.clipboard.writeText(linkGerado)
  p.innerText = "Link copiado para a área de tranferência"
} 





btnCopiar.addEventListener("click", copiar)
btnMandar.addEventListener("click", mandar)
numeroTel.addEventListener("input", campos)
resultado.addEventListener("click", txtResultado)
