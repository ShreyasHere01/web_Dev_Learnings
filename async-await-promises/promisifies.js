function waitforme(res){
    setTimeout(res,3000);
}
function setTimeoutpfied(){
    return new Promise(waitforme);
}
function main(){
    console.log("im billioniar");
}
setTimeoutpfied().then(main);