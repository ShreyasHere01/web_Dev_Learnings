function promisfied(resolve){
    let c=0;
    for(let i=0;i<10;i++){
        c++;
    }
    resolve(c);
}
const p= new Promise(promisfied);
function callback(cval){
    console.log("value of c is " +cval);
}
p.then(callback);