function canVote(age){
    let right=(age>=18);
    return right;
}
let canivote=canVote(21);
let canivote2=canVote(17);
console.log(canivote);
console.log(canivote2)