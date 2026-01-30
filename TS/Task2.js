/*
TASK 2: INTERFACE WITH OPTIONAL PROPERTY
Create a USER interface with optional EMAIL.
*/
var user1 = {
    name: "Meet",
    age: 12,
    location: {
        pincode: 395009,
        locality: "LA",
        area: "New York",
    },
    phoneNumber: 904522314,
    email: "Meet@xyx.com"
};
// There will be error if we define it in Interface and did not use! 
// Property 'phoneNumber' is missing in type '
// let user2:User={
//     name:"Harsh ",
//     age:12,
//     location:{
//         pincode:395009,
//         locality:"LA",
//         area:"New York",
//     },
// };
console.log(user1);
//If there is no email,.  it won't cause error as we declare it optional.
var user2 = {
    name: "Harsh ",
    age: 12,
    location: {
        pincode: 395009,
        locality: "LA",
        area: "New York",
    },
    phoneNumber: 54121894619
};
console.log(user2);
