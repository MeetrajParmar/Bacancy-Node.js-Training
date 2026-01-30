/*
TASK 4: FUNCTION WITH TYPED OBJECT PARAMETER:
Use interface  in function parameter
*/
function printFullDetails(data) {
    return "WELCOME ".concat(data.firstName, " ").concat(data.lastName, ". Your age is ").concat(data.age, "!");
}
var obj1 = {
    firstName: "first",
    lastName: "second",
    age: 3,
};
var obj2 = {
    name: "first",
    surname: "second",
    ag: 2
};
console.log(printFullDetails(obj1));
//console.log(printFullDetails(obj2)); 
//Argument of type '{ name: string; surname: string; ag: number; }' is not assignable to parameter of type 'details'
// console.log(printFullDetails("Meet","Parmar",34)); 
