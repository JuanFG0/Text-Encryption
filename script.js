var bencrypt = document.querySelector(".encrpyt-btn");
var bdecrpyt = document.querySelector(".decrpyt-btn");
var imgiv = document.querySelector(".iv-container");
var container = document.querySelector(".container-p");
var result = document.querySelector(".text-result");

bencrypt.onclick = encrypt;
bdecrpyt.onclick = decrpyt;

function encrypt(){
    hide();
    var textbox = textre()
    result.textContent = encryptText(textbox);
}

function decrpyt(){
    hide();
    var textbox = textre()
    result.textContent = decryptText(textbox);
}

function textre(){
    var textbox = document.querySelector(".text-box")
    return textbox.value
}

function hide(){
    imgiv.classList.add("hide");
    container.classList.add("hide");
}

function encryptText(message){
    var text = message;
    var finaltext = "";

    for(var i = 0; i < text.length; i++){
        if(text[i] == "a"){
            finaltext = finaltext + "ai"
        }
        else if(text[i] == "e"){
            finaltext = finaltext + "enter"
        }
        else if(text[i] == "i"){
            finaltext = finaltext + "imes"
        }
        else if(text[i] == "o"){
            finaltext = finaltext + "ober"
        }
        else if(text[i] == "u"){
            finaltext = finaltext + "ufat"
        }
        else{
            finaltext = finaltext + text[i]
        }
    }
    return finaltext;

}

function decryptText(message){
    var text = message;
    var finaltext = "";

    for(var i = 0; i < text.length; i++){
        if(text[i] == "a"){
            finaltext = finaltext + "a"
            i = i+1;
        }
        else if(text[i] == "e"){
            finaltext = finaltext + "e"
            i = i+4;
        }
        else if(text[i] == "i"){
            finaltext = finaltext + "i"
            i = i+3;
        }
        else if(text[i] == "o"){
            finaltext = finaltext + "o"
            i = i+3;
        }
        
        else if(text[i] == "u"){
            finaltext = finaltext + "u"
            i = i+3;
        }
        else{
            finaltext = finaltext + text[i];
        }
        
    }

    return finaltext;

}

const btnCopiar = document.querySelector(".bt-copy"); 
    btnCopiar.addEventListener("click", copiar = () => {
    var contenido = document.querySelector(".text-result").textContent;
    navigator.clipboard.writeText(contenido);
    console.log("hola"); 
});
