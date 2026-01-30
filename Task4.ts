/*
TASK 4: FUNCTION WITH TYPED OBJECT PARAMETER:
Use interface  in function parameter
*/


interface details{
    firstName:string,
    lastName:string,
    age:number,
}

function printFullDetails(data:details){
    return `WELCOME ${data.firstName} ${data.lastName}. Your age is ${data.age}!`;
}

let obj1={
    firstName:"first",
    lastName:"second",
    age:3,
}
let obj2={
    name:"first",
    surname:"second",
    ag:2
}
console.log(printFullDetails(obj1));
//console.log(printFullDetails(obj2)); 
//Argument of type '{ name: string; surname: string; ag: number; }' is not assignable to parameter of type 'details'
// console.log(printFullDetails("Meet","Parmar",34)); 