
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
