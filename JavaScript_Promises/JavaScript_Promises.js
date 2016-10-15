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
