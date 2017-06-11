
/**
 * 
 * CLOSURE
 * 
 * Definition: When a function "remembers" it's lexical scope
 * even when the function is executed outside that lexical scope. 
 * 
 */


/**
 * Example 1: Passing functions as parameters
 */
function foo() {
    var bar = "bar";

    function baz() {
        console.log("bar");
    }

    bam(baz);
}


function bam(baz){
    baz();          // "bar"
}

foo();


/**
 * Example 2: Returning functions from functions
 * 
 */
function foo() {
    var bar = "bar";

    return function() {
        console.log("bar");
    };
}

function bam() {
    foo()();
}

bam();

/**
 * Example 3: 
 */
function foo() {
    var bar = "bar";

    setTimeout(function(){
        console.log(bar);
    }, 1000);
}

foo();

/**
 * Example: Loops
 * 
 * This code prints out i: 6 five different times. 
 * 
 */
for (var i=1; i<=5; i++) {
    setTimeout(function(){
        console.log("i: " + i);
    }, i*1000)
}

/**
 * Solutionn to the above problem is to use an IIFE
 */
for (var i=1; i<=5; i++) {
    (function(i){
        setTimeout(function(){
            console.log("i: " + i);
        }, i*1000)
    })(i)
}

/**
 * Closure: loops + block scope
 */
for (let i=1; i<5; i++) {
    setTimeout(function() {
        console.log("i: " + i);
    }, i*1000);
}