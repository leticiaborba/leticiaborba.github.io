var cores = ["red", "purple", "blue", "yellow", "pink", "green", "brown", "black"];

function randomNumber(min,max){

    return Math.floor(Math.random()*(max-min+1)+min);

}

function textColor(){
    $("#text").css("color", cores[randomNumber(0, cores.length-1)])
}

setInterval(textColor, 300);