const fs= require("fs");
function setTimePromi(duration ){
    return new Promise(function(resolve){
        setTimeout(resolve, duration);});
    }

    function readfileas(){
        return new Promise(function(resolve,reject){
            fs.readFile("aa.txt","utf-8",function(err,data){
                if(err){
                    reject("file not found");
                }
                else{
               resolve(data);}
            })
        })
    }
    function writeit(){
        return new Promise(function(resolve, reject){
            fs.writeFile("a.txt","data is changed ", function(err,data){
                if(err){
                    reject("file not found");

                }
                else{
                resolve();}
            })
        })
    }

    async function solve() {
        await setTimePromi(1000);
       console.log( await readfileas());
       
        await writeit();
        await setTimePromi(3000);
      console.log( await readfileas());
        
    }
    solve().then(function(x){
        console.log("file read :"+x);
    }).catch(function(e){
        console.log(e);
    })
    console.log(" after solve ");
