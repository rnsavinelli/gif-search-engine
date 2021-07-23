/* import { search } from './engine.js'; */

var runButton = document.getElementById('buttonSearch');
runButton.addEventListener('click', function(){
    var input = document.querySelector("input").value;
    search(input);
});

var clearButton = document.getElementById('buttonClear');
clearButton.addEventListener('click', clearContent);

var inputTag = document.getElementById('searchUser');
inputTag.addEventListener('keyup', function(e) {
    if(e.key === 'Enter') {
        var input = document.querySelector("input").value;
        search(input);
    }
});