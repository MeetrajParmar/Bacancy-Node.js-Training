/*
TASK 5: GENERIC FUNCTION
Return first element of ARRAY.
*/
function firstElement(list) {
    return list[0];
}
var first = firstElement([1, 2, 3, 5, 7,]);
console.log(first);
var second = firstElement(['Sasdas', 'sdasdasd', 'dasdasdasd', 'sdasdasdasa', 'sdasadasda']);
console.log(second);
var third = firstElement([{ name: "meet", age: '34' }, { location: 'Surat' }]);
console.log(third);
