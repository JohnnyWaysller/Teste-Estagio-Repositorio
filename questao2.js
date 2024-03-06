
function fibonacci(numeroUsuario) {
    //(numero) valor de entrada do usuario e fator de parada loop
    let n1 = 0;              
    let n2 = 1;              
    while (n1 < numeroUsuario) {
        let temp = n1;       
        n1 = n2;              
        n2 = temp + n2;       
    }
    return n1 === numeroUsuario;
    //apos loop compara (n1) da sequencia com entrada
    //se n1 for igual entrada significa que faz parte 
}

const numeroUsuario = parseInt(prompt("Digite um número para verificar se pertence à sequência de Fibonacci:"));

if (fibonacci(numeroUsuario)) { // se expressao for true no retorno
    //indica que valor inicial da constante faz parte
    console.log("o numero: " + numeroUsuario + " pertence à sequência.");
    alert("o numero: " + numeroUsuario + " pertence à sequência.")
} else {
    //caso contrario false nao pertence
    console.log("o numero: " + numeroUsuario + " não pertence à sequência.");
     alert("o numero: " + numeroUsuario + " não pertence à sequência.")
}