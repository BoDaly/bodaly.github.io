var config = { attributes: true, childList: true, subtree: true };
var dynamic = document.querySelector(".dynamic-button")
var test = document.querySelector(".ql-editor")
var callback = function(mutationsList, observer) {
    for(var mutation of mutationsList) {
        if (mutation.type == 'childList') {
            for( var oneNode of mutation.addedNodes ){
                if( oneNode.nodeType === 3 ){
                    oneNode.parentNode.removeChild(oneNode);
                }
            } 
            console.log('A child node has been added or removed:',mutation);
        }
        else if (mutation.type == 'attributes') {
            console.log('The ' + mutation.attributeName + ' attribute was modified.');
        }
    }
};

var acallback = function(mutationsList, observer) {
    debugger;
    for(var mutation of mutationsList){
        if(mutation.removedNodes.length > 0){
            for(var node of mutation.removedNodes){
                mutation.target?mutation.target.appendChild(node):null
            }
        }
    }
}
var observer = new MutationObserver(callback);
var aobserver = new MutationObserver(acallback)

dynamic?observer.observe(dynamic, config):null;
test?aobserver.observe(test, config):null;
