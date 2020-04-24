const heading= document.createElement("h1");
const insideBox= document.getElementsByClassName("inside-box");
heading.innerHTML="To do:";
insideBox.appendChild(heading);

const listDiv= document.createElement("div");
listDiv.classList.add("To-do items");
const frstTodoDiv= document.createElement("div")
frstTodoDiv.classList.add("row")
const column1= document.createElement("div")
column1.classList.add("col")
const item1= document.createElement("h3")
item1.innerHTML="Wake up"
const column2= document.createElement("div")
column1.classList.add("col")
const item2= document.createElement("btn")
item2.attribute="Wake up"
