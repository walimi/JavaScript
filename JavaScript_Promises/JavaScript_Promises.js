// Using Promises

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