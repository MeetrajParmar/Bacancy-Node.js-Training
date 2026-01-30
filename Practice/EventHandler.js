console.log("Hello Before!!");

setTimeout(() => {
  console.log("Set timeout 0 Trial");
}, 0);

console.log("After EH");

/*
    Aysnc 
*/
/* 
Output:
Hello Before: 
After EH
Set timeout 0 Trail

When settimeout it's goes to  webapis after, it goes to task queue. Eventloop only execute it when main stack call is empty.
*/
