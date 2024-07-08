// change everything below to the newer Javascript!

// let + const
let a = 'test';
const b = true;
const c = 789;
a = 'test2';
//*optimized existsing code ^


const firstName = person.firstName;
const lastName = person.lastName;
const age = person.age;
const eyeColor = person.eyeColor;
//*optimized existsing code ^


const { firstName, lastName, age, eyeColor } = person;
//*optimized existsing code ^


// Object properties
const a = 'test';
const b = true;
const c = 789;

const okObj = { a, b, c };
//*optimized


// Template strings
const message = `Hello ${firstName} have I met you before? I think we me in ${city} last summer?`;
//*optimized exiting code ^

// default arguments
// default age to 10;
function isValidAge(age) {
    return age
}
//optimized*
const isAgeValid = (age = 10) => age;


// Symbol
// Create a symbol: "This is my first Symbol"
let sym = Symbol('This is my first Symbol!');



// Arrow functions
const whereAmI = (username, location) => {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}
//*optimized existing code ^
