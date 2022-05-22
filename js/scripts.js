var textarea = document.querySelector(".areadigite");
var areaResultado = document.querySelector(".arearesultado");

var btnCodificador = document.querySelector("#criptografar");
var btnDecodificador = document.querySelector("#Descriptografar");

// remove imagem da arearesultado //

btnCodificador.addEventListener("click", remove);
var imagenDeFundo = document.querySelector(".imgresultado");
function remove() {
  imagenDeFundo.parentNode.removeChild(imagenDeFundo);
}

// criptografa o texto//
btnCodificador.addEventListener("click", function (e) {
  e.preventDefault();

  var texto = textarea.value;
  var textoCodificado = "";

  for (let i = 0; i < texto.length; i++) {
    var letra = texto[i];
    if (letra == "a") {
      textoCodificado += "ai";
    } else if (letra == "i") {
      textoCodificado += "imes";
    } else if (letra == "e") {
      textoCodificado += "enter";
    } else if (letra == "o") {
      textoCodificado += "ober";
    } else if (letra == "u") {
      textoCodificado += "ufat";
    } else {
      textoCodificado += letra;
    }
  }

  // var textoCodificado = texto.replace(/a/g, 'ai');
  // textoCodificado = textoCodificado.replace(/i/g, 'imes');
  // textoCodificado = textoCodificado.replace(/e/g,"enter");

  // textoCodificado = textoCodificado.replace(/o/g, 'ober');
  // textoCodificado = textoCodificado.replace(/u/g, 'ufat');

  console.log(texto);
  console.log(textoCodificado);
  areaResultado.innerHTML = textoCodificado;
});
// descriptograga o texto//
btnDecodificador.addEventListener("click", function (e) {
  e.preventDefault();

  var texto = textarea.value;

  console.log(texto);

  var textoDecodificado = texto.replace(/ai/g, "a");
  textoDecodificado = textoDecodificado.replace(/enter/g, "e");
  textoDecodificado = textoDecodificado.replace(/imes/g, "i");
  textoDecodificado = textoDecodificado.replace(/ober/g, "o");
  textoDecodificado = textoDecodificado.replace(/ufat/g, "u");

  console.log(textoDecodificado);
  areaResultado.innerHTML = textoDecodificado;
});
