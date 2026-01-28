//let and const does allow the scope outside the block but var does.
if (Math.random() > 0.5) {
  let x = 1;
} else {
  x = 2;
}
console.log(x);

/*JIT Compilation: Just in Time Compilation
It has both Interpretter and Compiler
Compiler optimise the code while interpretter , interpeter the code. 
JS has JIT Compilation
Mark and Sweep algorithm. Inlining , Copy elision and Inline Caching.
Garbage Collector
*/
