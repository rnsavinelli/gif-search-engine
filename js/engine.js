/* Giphy API URL and KEY */
var api_url = 'http://api.giphy.com/v1/gifs/search?';
var api_key = 'dc6zaTOxFJmzC'

function clearContent() {
    var searchResults = document.getElementById("searchResults");
    searchResults.innerHTML = '';
}

function displayContent(input) {
    clearContent()

    var response = JSON.parse(input);
  
    if (String(response.meta.status) === '200') {
        var imageUrls = response.data;

        imageUrls.forEach(function(image){
            var src = image.images.fixed_height.url;
            console.log(src);

            var container = document.getElementById("searchResults");
            container.innerHTML += "<img src=\"" + src + "\" class=\"container-image\">";
        });
    }
    else {
        var error = response.meta.msg
        displayError(error);
    }
}


function displayError(error) {
    clearContent()
  
    var container = document.getElementById("searchResults");
    container.innerHTML += "<p class=\"text-center\">" + error + "</p>"
}

function createCORSRequest(method, url){
    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr){
        xhr.open(method, url, true);
    } else if (typeof XDomainRequest != "undefined"){
        xhr = new XDomainRequest();
        xhr.open(method, url);
    } else {
        xhr = null;
    }
    return xhr;
}

/* Search engine */
function search(input) {
    // AJAX Request
    var url = api_url + 'q=' + input.replace(/\ /g, "+").replace(/[^a-zA-Z ]/g, "") + '&api_key=' + api_key

    var GiphyAJAXCall = createCORSRequest('GET', url );

    if (GiphyAJAXCall){
        GiphyAJAXCall.send();

        GiphyAJAXCall.addEventListener('load',function(e){
            var data = e.target.response;
            displayContent(data);
        });        
    }
}