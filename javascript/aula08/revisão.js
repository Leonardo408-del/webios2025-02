
let login = prompt("Insira seu E-mail:")
let senha = prompt("Insira sua senha:")
let loginCerto = "thiago@email.com"
let senhaCerto = "batatinha123"
// Validar se login é o login certo e se a senha també é

if (login == loginCerto && senha == senhaCerto) {
    alert("Credencial validada.")

    alert("opção 1: Crédito \n opção 2:consignado \n opção 3: Emprestimo \n opção 4: Renegociar \n opção 0: Falar com o atendente")
    let opcao = Number(prompt("Escolha a opção"))
switch (opcao){
    case 1:
    alert("Você selecionou Crédito. Relacionado para o setor!")
    break;
    case 2:
    alert("Você selecionou consignado. Redirecionado para o setor!")
    break;
    case 3:
    alert("você selecionou emprestimo. Redirecionado para o setor")
    break;
    case 4:
    alert("Você selecionou renegociar. Redirecionado para o setor")
    break;
    case 5:
    alert("Aguarde enquanto localizamos um atendente")
    break;

    default:
    alert("O usuario não selecionou uma opção valida. Encerrando o atendimento")
    break
}


}
// Se o login ou senha que o usuario insiriu não forem iguais o que temos, ele não pode fazer login no aplicativo
else{
    alert("Login ou senha!")
}
