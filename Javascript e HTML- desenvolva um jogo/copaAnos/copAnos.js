function pulaLinha() {
        
    document.write("<br>")
    document.write("<br>")
}

function mostra(frase) {
    
    document.write(frase)
    pulaLinha();
}

var anoCopa = 1930;
var limite = parseInt(prompt("Entre com a data limite"))

// o true dentro do while significa que ele vai sempre repetir o que está dentro dele. enquanto for verdadeiro, repete

while (anoCopa <= limite){

mostra("Teve copa em " + anoCopa); 
anoCopa = anoCopa + 4;
}
mostra("fim");

