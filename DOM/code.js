//a
elem = document.querySelector("#content");
console.log(elem.tagName);

//b
elem = document.querySelector(".basic");
console.log(elem.tagName);

//c
let elements = document.querySelectorAll("li");

for(elem of elements){
    console.log(elm.textContent);
}

//d
let bodyDes = document.querySelectorAll("body *");
for(elem of bodyDes){
    console.log(elem.nodeName);
}