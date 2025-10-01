let idade = 18
let temDinheiro = false
let temCadUnico = false
// > maior que
// >= maior ou igual a
// < menor que
// <=menor que ou igual a

if (idade >= 18){
    if (temDinheiro == true){
        console.log("Vamos pagar o quebra!");
    }
    else{
        if (temCadUnico == true){ 
            console.log("CNH de graça");
        }
       else{
        console.log("Pobrinho e sem cadastro");
       }
    }
}
else{
    console.log("muito novo para pilotar");
}    