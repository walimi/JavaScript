// Objects
// Create a constructor function. (Use upper-case letter.)

function Player(n, s, r) {
    this.name = n;
    this.score = s;
    this.rank = r;
}

// Prototype: Multiple objects that share the same desription. 
// Attaching new methods to the constructor
Player.prototype.logInfo = function () {
    console.log("I am ", this.name);
}


Player.prototype.promote = function () {
    this.rank++;
    console.log("My rank is ", this.rank);
}


// Step 2: Create normal variable
var fred = new Player("Fred", 1000, 5);
fred.logInfo();
fred.promote();