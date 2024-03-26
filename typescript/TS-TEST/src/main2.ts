//Guards 


function logText(el: Element) {
    console.log(el.textContent);
}

const h1el = document.querySelector('h1') as Element
if (h1el instanceof HTMLHeadingElement) {
logText(h1el)
}