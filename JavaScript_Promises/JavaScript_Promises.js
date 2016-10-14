// Using callbacks

var teslaImageUrl = "https://tctechcrunch2011.files.wordpress.com/2015/08/tesla_model_s.jpg";
loadImage(teslaImageUrl, 
    function onsuccess(img) {
        // Add the image to the page
        document.body.appendChild(img);
    },    
    function onerror(e) {
        console.log("Error occurred while loading image");
        console.log(e);
    });


function loadImage(url, success, error) {
    var img = new Image();
    img.src = url;

    img.onload = function () {
        success(img);
    };

    img.onerror = function (e) {
        error(e);
    };
}