let indice=0;
let string = prompt(`insira uma palavra:`)
let char=[];
char.length=string.length;


for(let i=string.length-1; i>=indice; i--) {
char[i]=string[(string.length-1)-i]
}

let palavraInversa = "";

for (let i=0; i<char.length; i++){
    palavraInversa += char[i];
}
alert(`${palavraInversa}`)
console.log(palavraInversa)
