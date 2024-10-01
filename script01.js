// if/ else if
// se Senão se

const numeroMes = Number(prompt('Informe o Número do mês'))


// verifica se numeroMês for 1 ,então o mês  é janeiro
// Senão ,verifica se numeroMês for 2 , então é o mês de fevereiro
// Senão ,verifica se numeroMês for 3 , então o Mês é março

let nomeMês

if (numeroMês === 1) {
  nomeMês = janeiro
}
else
    if (numeroMês === 2) {
nomeMês = fevereiro
    
}
else 
    if (numeroMês === 3) {
        nomeMês = março
    }

   else if (numeroMês ===4) {
        nomeMês = Abril
    }

   else if (numeroMês === 5) {
        nomeMês = Maio
    }

   else if (numeroMês === 6) {
        nomeMês = junho
    }
   else if (numeroMês === 7) {
        nomeMês = julho
    }

    else if (numeroMês === 8) {
        nomeMês = agosto
    }

   else if (numeroMês === 9){
        nomeMês = setembro
    }

   else if(numeroMês === 10) {
        nomeMês = outubro
    }

else {
    nomeMês = "Mes invalido"

}
    //SWITCH CASE
    switch (numeroMês) {
    case 1:
        nomeroMês ="janeiro"
        break
        nomeMes

        case 2:
            numeroMes = "fevereiro"
            break
            nomeMes

            
    
    }


documento.body.appendChild(document.creatElementeTextNode(nomeMês))