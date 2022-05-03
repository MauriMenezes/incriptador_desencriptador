console.log("fui carregado de um arquivo externo!")

var textarea = document.querySelector(".areadigite")

var btnCodificador = document.querySelector("#criptografar")
var btnDecodificador = document.querySelector("#Descriptografar")

// criptografa o texto//
btnCodificador.addEventListener("click", function(e){

    e.preventDefault();

    var texto = textarea.value;
    console.log(texto);
    
    var textoCodificado = texto.replace(/a/g, 'ai');
    textoCodificado = textoCodificado.replace(/e/g,"enter")
    textoCodificado = textoCodificado.replace(/i/g, 'imes');
    textoCodificado = textoCodificado.replace(/o/g, 'ober');
    textoCodificado = textoCodificado.replace(/u/g, 'ufat');

    console.log(textoCodificado);
 
})
// descriptograga o texto//
btnDecodificador.addEventListener("click", function(e){
    e.preventDefault();
    
    var texto = textarea.value;
    console.log(texto);

    var textoDecodificado = texto.replace(/ai/g, "a")
    textoDecodificado = textoDecodificado.replace(/enter/g, "e")    
    textoDecodificado = textoDecodificado.replace(/imes/g, "i")
    textoDecodificado = textoDecodificado.replace(/ober/g, "o")
    textoDecodificado = textoDecodificado.replace(/ufat/g, "u")

    console.log(textoDecodificado);

})


