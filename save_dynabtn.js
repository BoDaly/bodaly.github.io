var config = { attributes: true, childList: true, subtree: true };
var dynamic = document.querySelector(".dynamic-button")
var callback = function(mutationsList, observer) {
    for(var mutation of mutationsList) {
        if (mutation.type == 'childList') {
            console.log('A child node has been added or removed.');
        }
        else if (mutation.type == 'attributes') {
            console.log('The ' + mutation.attributeName + ' attribute was modified.');
        }
    }
};
var observer = new MutationObserver(callback);

observer.observe(targetNode, config);
