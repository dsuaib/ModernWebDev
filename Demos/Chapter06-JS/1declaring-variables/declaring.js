/* eslint-disable no-unused-vars */
/*
Everything in between the stars and 
slashes is a comment.
*/



console.groupCollapsed('Declarations and Initializations...');


var someVariable = 1;
var someVariable = 'a'; //Can happen when combining scripts
someVariable = true;    //Was this meant to be changed?

let changingValue = true;
let pi = 3.14;
let myMother = {
    name: 'Mary',
    age: 82
}


changingValue = false;
pi = 3.1415926535;
myMother = {
    name: 'Mary',
    age: 82
};
myMother.age++;

const cantPointToSomethingElse = new Date();
// cantPointToSomethingElse = 3;

{
    var x = 23;
    const y = 24;
    let z = 25;
}

console.log('​x', x);
console.log('​y', y);
console.log('​z', z);

let b; console.log(typeof b);
b = null; console.log(typeof b);
console.groupEnd();

//undefined and null
console.groupCollapsed('Undefined')
let abc;
console.log(abc);
console.groupEnd();

console.groupCollapsed('Numbers...');
let zz = 3.13; console.log(typeof z);
let divideByZero = (zz / +0); console.log('(zz/+0)=' + divideByZero);
divideByZero = (zz / -0); console.log('(zz/-0)=' + divideByZero);

let bigNum = Number.MAX_VALUE;
let tryBigger = bigNum * 2; console.log("Too big? " + tryBigger);

console.groupEnd();


function multiply (a, b) {
    if ((typeof b) != 'undefined') {
        //no op
    }
    else {
        b = 2;
    }

    b = ((typeof b) != 'undefined') ? b : 2;

    return a * b;
}

console.log('multiply(2,2.5) :>> ', multiply(2, 2.5));
console.log('multiply(2) :>> ', multiply(2));


//     var smallNum = Number.MIN_VALUE;
//     var trySmaller = (smallNum * 200); console.log("Too Small? " +trySmaller);
//     console.groupEnd();

console.groupCollapsed('strings...');
var dblQuoteString = "Isn't it nice that I can contain single quotes?";
var singleQuoteString = 'Well, you may "think" that\'s cool...';
console.log(dblQuoteString);
console.log(singleQuoteString);
console.groupEnd();

        //     var lowerString = "abc";
        //     var upperString = "ABC";

        //     console.group('Strings');
        //     console.log(lowerString == upperString);

        //     console.groupCollapsed('Template literals...');
        //     var name="Remembrance O'Neal";
        //     var myString = `        'Single' and "Double" quotes work
        //         Backticks allow other variables to be referenced: name= ${name}
        //         Line ${2+1}  Expressions can be evaluated
        //     `;
        //     console.log(myString);
        //     console.log("See more at: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals");
        //     console.groupEnd();

        //   console.groupCollapsed('Booleans...');
        // //truthy or falsy
        // console.log('abc');
        // console.log('is the true?' + Boolean('hello'));
        // console.log('is the true?' + Boolean(''));
        // console.groupEnd();
