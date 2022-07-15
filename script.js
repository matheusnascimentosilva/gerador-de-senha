/*
    Função que gera senhas aleatórias
    Pode ser adicionado mais valores
    Feita por Matheus Nascimento Silva
    Adaptada por
*/
function getPassword(){

    var caracteres = "0123456789abcdefghijklmnopqrstuvxzkABCDEFGHIJKLMNOPQRSTUVXZ!@#$%¨&*()-_+=|'´`[]{}ç,.;:<>/?^~";
    var passwordLenght = 16;
    var password = "";

    for(var i=0; i< passwordLenght; i++){
        var randoNumber = Math.floor(Math.random() * caracteres.length);
        password += caracteres.substring(randoNumber, randoNumber +1);
    }

    document.getElementById('password').value = password;
}
/*
    Funcção para apagar campos de um form
*/
function resetBtn(){
    document.getElementById('password').value = "";
}
/*
    Função que copia um valor de um campo.
*/
function copyPass(){
    var input = document.getElementById('password');
    var text = input.value;

    alert(text);

    document.getElementById('password').value = text;
    
}