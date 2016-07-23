// Using the CommonJS format with SystemJS

// Player module does not have any dependencies.

// private members
var playerName = "";

function logPlayer() {
    console.log("The current player is: " + playerName + ".");
}

function setName(newName) {
    playerName = newName;
}

function getName() {
    return playerName;
}

exports.logPlayer = logPlayer;
exports.setName = setName;
exports.getName = getName;