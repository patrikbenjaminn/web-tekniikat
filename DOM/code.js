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

//e
let articleDesc = document.querySelectorAll("article p");
for (elem of articleDesc){
    console.log(elem.textContent);
}

//f
for(elem of elements){
    elem.textContent = "John Doe";
}