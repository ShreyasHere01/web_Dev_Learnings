const r= require('fs');
function read(getfile){
    r.writeFile("a.txt","im multi billionaire",function(err,data){
        
    })
    r.readFile("a.txt","utf-8",function(err, data){
        getfile(data);
    })
}
function main(content){
    console.log(content);
}
function pr(readher){
    return new Promise(read);
}
pr().then(main);