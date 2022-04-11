document.querySelector("h2").textContent = "Let's manipulate some DOM again!";

let contentti = document.getElementById("content");
contentti.lastElementChild.remove;

let article = document.querySelector("article");

let firstChild = article.firstElementChild;
let lastChild = article.lastElementChild;

let temporary = fChild.textContent;

firstChild.textContent = lastChild.textContent;
lastChild.textContent = temporary;

let ul = document.createElement("ul");

for (let index = 1; index < 6; index++) {
    let li = document.createElement("li");
    li.textContent = "Number " + index;
    ul.appendChild(li);
    
}
contentti.appendChild(ul);

function createRow(colType, col1, col2){
    let tr = document.createElement("tr");
    let c1 = document.createElement(colType);
    let c2 = document.createElement(colType);
    c1.textContent = col1;
    c2.textContent = col2;
    tr.append(c1, c2);
    return tr;


}
let table = document.createElement("table");
table.appendChild(createRow("th", "Last name", "First name") );
table.appendChild(createRow("td", "John", "Doe"));
contentti.appendChild(table);

let contentChildren = document.querySelectorAll("#content>*");
/**@type{Element} */
let elem;
for(elem of contentChildren){
    let hr = document.createElement("hr");
    elem.parentElement.insertBefore(hr, elem);
}