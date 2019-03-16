var config = { attributes: true, childList: true, subtree: true };
var dynamic = document.querySelector(".shopify-payment-button")
var test = document.querySelector(".ProductForm")
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
    for(var mutation of mutationsList){
        console.log(mutation)
    }
}
var observer = new MutationObserver(callback);
var aobserver = new MutationObserver(acallback)

dynamic?observer.observe(dynamic, config):null;
test?aobserver.observe(test, config):null;
