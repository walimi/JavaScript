// Using Promises
/*
var displayImage1 = {
  show: function(url) {
    car.getCarImage(url).then(function(img) {
      document.body.appendChild(img);
    }).catch(function(e) {
      console.log("There was an error in displayImage1.");
    }); 
  }
}; 


var displayImage2 = {
  show: function(url) {
    car.getCarImage(url).then(function(img) {
      console.log("Image found");
    }).catch(function(e) {
      console.log("There was an error in displayImage2.");
    }); 
  }
};

var self = this;

var car = {
  carImagePromise: null, 
  getCarImage: function(url) {
    if(!this.carImagePromise) {
      this.carImagePromise = self.loadImage(url);
    }
    return this.carImagePromise;    
  }  
};

function loadImage(url) {
  var promise = new Promise(
    function resolver(resolve, reject) {
      var img = new Image();
      img.src = url;
      
      img.onload = function() {
        resolve(img);
      }
      
      img.onerror = function(e) {
        reject(e);
      }
    }
  );
  return promise;
}

var url = "https://tctechcrunch2011.files.wordpress.com/2015/08/tesla_model_s.jpg";
displayImage1.show(url);
displayImage2.show(url);

*/


/*
// Chaining Promises


Promise.resolve("ta-da!").then(
  function step2(result) {
    console.log("Step 2 received " + result);
    return "Greetings from Step 2";                 // Explicit return value. 
  }
).then(
  function step3(result) {
    console.log("Step 3 received " + result);      // No explicit return value.
  }
).then(
  function step4(result) {
    console.log("Step 4 received " + result);
    return Promise.resolve("fulfilled value");    // Returns a Promise
  }
).then(
  function step5(result) {
    console.log("Step 5 received " + result); 
  }
);

*/

/*
// Callback Execution Order
// (The numbered comments show the relative execution order.)
var promise = new Promise(function(resolve, reject) {
  console.log("Inside the resolver function");            // 1
  resolve();
});

promise.then(function() {
  console.log("Inside the onFulfilled handler");          // 3
});

console.log("This is the last line of the script");       // 2

*/


/*
// Basic Error Propogation

// - Using rejection handler at the end of a chain
Promise.reject(Error("bad news")).then(
  function step2() {
    console.log("This is never run");
  }
).then(
  function step3() {
    console.log("This is also never run");
  }
).catch(
  function (error) {
    console.log("Something failed along the way. Inspect error for more info.");
    console.log(error); // Error object with message: "bad news"
  }
);

// - Rejecting a promise by throwing an error in the constructor Callback
rejectWith("bad news").then(
  function step2() {
    console.log("This is never run"); 
  }
).catch(
  function (error) {
    console.log("Foiled again."); 
    console.log(error); // Error object with message: "bad news

  }
);


function rejectWith(val) {
  return new Promise(function (resolve, reject) {
    throw Error(val);
    resolve("Not used"); // This line is never run.
  });
}
*/


// Sequential Execution using Loops or Recursion

// - Running tasks in parallel using a Loops

var products = ["sku-1", "sku-2", "sku-3"];

products.forEach(function(sku) {
  getInfo(sku).then(function (info) {
    console.log(info);
  })
});

function getInfo(sku) {
  console.log("Requested info for: " + sku);
  return ajax(/* some URL for sku/*/);
}

// Console output:
// Requested info for SKU-1
// Requested info for SKU-2
// Requested info for SKU-3
// Info for SKU-1
// Info for SKU-2
// Info for SKU-3


// - Simple array.reduce to sum numbers
var numbers = [2, 4, 6];
var sum = numbers.reduce(function(sum, number) {
  return sum + number;
}, 0);

console.log(sum);
// Console outuput:
// 12

// - Build a sequential chain using a loop
// (Build a sequential chain of promises from the elements in an array)

function sequence(array, callback) {
  return array.reduce(function chain(promise, item) {
    return promise.then(function() {
      return callback(item);
    });
  }, Promise.resolve());
};

var products = ["sku-1", "sku-2", "sku-3"];

sequence(products, function(sku) {
  return getInfo(sku).then(function(info){
    console.log(info);
  });
}).catch(function(reason){
    console.log(reason);
});

function getInfo(sku) {
  console.log("Requested info for " + sku);
  return ajax(/* some url for AJAX */);
}


// Console output:
// Requested info for SKU-1
// Info for SKU-1
// Requested info for SKU-2
// Info for SKU-2
// Requested info for SKU-3
// Info for SKU-3


// - Build sequential chain using Recursion
// (Replaces sequence function in previous example with a recursive implementation)

function sequence(array, callback) {
  function chain(array, index) {
    if(index === array.length) return Promise.resolve();
    return Promise.resolve(callback(array[index])).then(function() {
      return chain(array, index++);
    });
  }

  return chain(array, 0);
}


