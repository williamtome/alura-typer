var frase = $(".frase").text();
var numPalavras = frase.split(" ").length;
var tamanhoFrase = $("#tamanho-frase");
tamanhoFrase.text(numPalavras);

var campo = $(".campo-digitacao")
campo.on("input", function () { 
    var conteudo = campo.val();
    var qtdePalavras = conteudo.split(/\S+/).length - 1;
    $("#contador-palavras").text(qtdePalavras);
    $("#contador-caracteres").text(conteudo.length);
});

var tempo = $("#tempo-digitacao").text();
campo.one("focus", function(){
    var cronometroId = setInterval(function(){
        tempo--;
        $("#tempo-digitacao").text(tempo);
        if (tempo < 1) {
            campo.attr("disabled", true);
            clearInterval(cronometroId);
        }        
    },1000)
    
});