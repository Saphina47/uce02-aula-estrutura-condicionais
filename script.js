const dividendo= Number(prompt ("informe o dividendo"))
const divisor  Number(prompt ("Informe o divisor"))


console. log(`dividendo ${dividendo}`) 
console. log("Divisor " + divisor )

let resultado = 0

// se o valor do divisão for igual zero 
// não faz o calculo.
// Senão , pode seguir com o calculo .

if (dividendo !=0); {
    resultado = dividendo /divisor
    
}
  else {
    resultado = 1
  }

const mensagem = ` A divisor de ${dividendo} por ${divisor}  é igual a ${resultado}`
const ElementoMensagem.Textcontent = document.createElement( "h1") 
// <h1>mensagem</h1>

ElementoMensagem.textconten= mensagem 
documento.body.appenchild(ElementoMensagem)

// Dom - Documento Objeto Model