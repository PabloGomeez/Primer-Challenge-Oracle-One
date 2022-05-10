function encriptar(){
    var texto = document.getElementById("input-texto").value.toLowerCase();
    var texto_cifrado =  texto.replace(/e/igm, "enter");
    var texto_cifrado =  texto_cifrado.replace(/o/igm, "ober");
    var texto_cifrado =  texto_cifrado.replace(/i/igm, "imes");
    var texto_cifrado =  texto_cifrado.replace(/a/igm, "ai");
    var texto_cifrado =  texto_cifrado.replace(/u/igm, "ufat");

    document.getElementById("imagen-derecha").style.display = "none";
    document.getElementById("texto").style.display = "none";   
    document.getElementById("texto2").innerHTML = texto_cifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}

function desencriptar(){
    var texto = document.getElementById("input-texto").value.toLowerCase();
    var texto_cifrado =  texto.replace(/enter/igm, "e");
    var texto_cifrado =  texto_cifrado.replace(/ober/igm, "o");
    var texto_cifrado =  texto_cifrado.replace(/imes/igm, "i");
    var texto_cifrado =  texto_cifrado.replace(/ai/igm, "a");
    var texto_cifrado =  texto_cifrado.replace(/ufat/igm, "u");

    document.getElementById("imagen-derecha").style.display = "none";
    document.getElementById("texto").style.display = "none";   
    document.getElementById("texto2").innerHTML = texto_cifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}

function copy(){
    var contenido = document.querySelector("#texto2");
    contenido.select();
    document.execCommand("copy");
    alert("se copio");
}