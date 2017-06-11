/**
 * Promises using jQuery Deferred objects. 
 * 
 * Promises uninvert the inversion of control. You get a promise back
 * from that code and decide what we want to do with it. 
 */

/**
 * Example 1
 */
var wait = jQuery.Deferred();
var p = wait.promise();

p.done(function(value) {
    console.log(value);
});

setTimeout(function() {
    wait.resolve(Math.random());
}, 1000);

/**
 * Example 2: Async Patterns jQuery-style promises
 */
function waitForN(n) {
    var d = $.Deferred();
    setTimeout(d.resolve, n);
    return d.promise();
}

waitForN(1000)
    .then(function() {
        console.log("Hello world");
        return waitForN(2000);
    })
    .then(function(){
        console.log("finally!");
    }) 