var dynamic = document.querySelector(".dynamic-button")
var spans = dynamic.querySelectorAll("span")
for ( let span of spans ){
    span.setAttribute('data-skip-hko-acc', true)
}
var buttons = dynamic.querySelectorAll("button")
for ( let button of buttons ){
    button.innerText = "More payment options."
}
