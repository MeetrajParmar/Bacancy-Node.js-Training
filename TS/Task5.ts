/*
TASK 5: GENERIC FUNCTION
Return first element of ARRAY.
*/

function firstElement<T>(list:T[]):T{
    return list[0];
}

let first=firstElement([1,2,3,5,7,]);
console.log(first);
let second=firstElement(['Sasdas','sdasdasd','dasdasdasd','sdasdasdasa','sdasadasda']);
console.log(second);
let third=firstElement([{name:"meet",age:'34'},{location:'Surat'}])
console.log(third);