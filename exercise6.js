//Solve these problems:

//#1 Create a one line function that adds adds two parameters
const addTwo = (a , b) => (a+b); //<<<Solution



//Closure: What does the last line return?
const addTo = x => y => x + y
var addToTen = addTo(10)
addToTen(3)
//the last line returns 13: x and y are vacant, so 10 is in place of x+y and addToTen(3) adds 3 to the filled value.



//Currying: What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
curriedSum(30)(1)
//Returns 31. a and b are defined as 30 and 1.


//Currying: What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
const add5 = curriedSum(5)
add5(12)
//Returns 17. Without much thought, 12 and 5 are the only values filling the varibales.

//Composing: What does the last line return?
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
compose(add1, add5)(10)
//Returns 16. Although abstract, the values and their associated variables are defined and simple.

//What are the two elements of a pure function?
//Deterministic. Functions predictably return the same output accomplished by not changing variables outside of the function.
//Function's state not being modified by code outside. Must only function based on used variables. "Avoid Side Effects"
