let users=[{name:"yash",
    age:21,
    gender:"male"
},{
    name:"karan",
    age:19,
    gender:"male"
},{name:"shradha",
    age:19,
    gender:"female"
}] ;
function data(users){
    for(let i=0;i<users.length;i++){
        if(users[i].age>18 && users[i].gender=="female"){
            console.log("name is " +users[i].name);
        }
    }
}
data(users);