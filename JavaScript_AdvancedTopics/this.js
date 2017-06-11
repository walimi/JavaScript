/**
 * 
 * this keyword
 * 
 * Binding of this keyword in order of precedence
 * 1. Was the function called with the 'new' keyword?
 * 2. Was the function called 'call' or 'apply' specifying an explicit this?
 * 3. Was the function called via a containing/owning object (context)?
 * 4. DEFAULT: global object (except strict mode which defults to undefined)
 * 
 */

/**
 * Rule #1 Example
 */
function foo() {
    this.baz = "baz";
    console.log(this.bar +  " " + baz);
}

var bar = "bar";
var baz = new foo(); 

/**
 * Rule #2 Example
 */
function foo() {
    console.log(this.bar);
}

var bar = "bar1";
var obj = { bar: "bar2" };

foo();           // "bar1"
foo.call(obj);   // "bar2"
foo.apply(obj);  // "bar2"

/**
 * Rule #3 Example
 */
function foo() {
    //"use strict"
    console.log(this.bar);
}


var bar = "bar1";
var o2 = { bar: "bar2", foo: foo };
var o3 = { bar: "bar3", foo: foo };

foo();      // "bar1"
o2.foo();   // "bar2"
o3.foo();   // "bar3"