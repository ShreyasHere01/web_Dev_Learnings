let user={
    name:"yash",
    age:16,
    gender:"female"
}
function greet(user){
    if(user.gender=="male"){
        console.log("hi Mr "+user.name + "ur age is"+user.age );
        if(user.age>18){
             console.log("hi Mr "+user.name + "you can vote" );
        }
        else{
             console.log("hi Mr "+user.name + "you cant vote" );
        }
    }
    else{
         console.log("hi Ms "+user.name + "ur age is"+user.age );
          if(user.age>18){
             console.log("hi Ms "+user.name + "you can vote" );
        }
        else{
             console.log("hi Ms "+user.name + "you cant vote" );
        }
    }
}
greet(user);