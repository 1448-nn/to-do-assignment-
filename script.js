const tbody = document.getElementById("tablebody");
const TodoTable = document.getElementsByTagName("table");
const saveBtn = document.getElementById("btn");
const inputElement = document.getElementById("frm");

//const TodoTable = document.createElement("tbody");
const firstTodoItem = document.createElement("tr");
const column1= document.createElement("td");
const item1= document.createElement("h6");
item1.innerHTML="Wake up";
column1.appendChild(item1);
firstTodoItem.appendChild(column1);

const column2= document.createElement("td");
const item2= document.createElement("btn");
item2.classList.add ("btn", "btn-success", "float-right");
item2.innerHTML = "✓";
column2.appendChild(item2);
firstTodoItem.appendChild(column2);

const column3= document.createElement("td");
const item3= document.createElement("btn");
item3.classList.add ("btn", "btn-danger",);
item3.innerHTML = "✕";
column3.appendChild(item3);
firstTodoItem.appendChild(column3);
tbody.appendChild(firstTodoItem);

item3.addEventListener("click", (e)=>{
    firstTodoItem.remove();
});
item2.addEventListener("click", (e)=>{
    alert ("OK");
});
//second item
const secondTodoItem = document.createElement("tr");
const column4= document.createElement("td");
const item4= document.createElement("h6");
item4.innerHTML="Eat Breakfast";
column4.appendChild(item4);
secondTodoItem.appendChild(column4);

const column5= document.createElement("td");
const item5= document.createElement("btn");
item5.classList.add ("btn", "btn-success", "float-right");
item5.innerHTML = "✓";
column5.appendChild(item5);
secondTodoItem.appendChild(column5);

const column6= document.createElement("td");
const item6= document.createElement("btn");
item6.classList.add ("btn", "btn-danger");
item6.innerHTML = "✕";
column6.appendChild(item6);
secondTodoItem.appendChild(column6);
tbody.appendChild(secondTodoItem);

item6.addEventListener("click", (e)=>{
    secondTodoItem.remove();
});
item5.addEventListener("click", (e)=>{
    alert ("OK");
});

// third todo-item

const thirdTodoItem = document.createElement("tr");
const column7= document.createElement("td");
const item7= document.createElement("h6");
item7.innerHTML="Go to work";
column7.appendChild(item7);
thirdTodoItem.appendChild(column7);

const column8= document.createElement("td");
const item8= document.createElement("btn");
item8.classList.add ("btn", "btn-success", "float-right");
item8.innerHTML = "✓";
column8.appendChild(item8);
thirdTodoItem.appendChild(column8);


const column9= document.createElement("td");
const item9= document.createElement("btn");
item9.classList.add ("btn", "btn-danger");
item9.innerHTML = "✕";
column9.appendChild(item9);
thirdTodoItem.appendChild(column9);
tbody.appendChild(thirdTodoItem);

item9.addEventListener("click", (e)=>{
    thirdTodoItem.remove();
});
item8.addEventListener("click", (e)=>{
    alert ("OK");
});

saveBtn.addEventListener("click", (e)=>{
    event.preventDefault();

const inputElementValue = inputElement.value; 
const TodoItem = document.createElement("tr");
const column= document.createElement("td");
const item= document.createElement("h6");
item.innerHTML=inputElementValue;
inputElement.Value = "";
column.appendChild(item);
TodoItem.appendChild(column);

const column2= document.createElement("td");
const item2= document.createElement("btn");
item2.classList.add ("btn", "btn-success", "float-right");
item2.innerHTML = "✓";
column2.appendChild(item2);
TodoItem.appendChild(column2);

const column3= document.createElement("td");
const item3= document.createElement("btn");
item3.classList.add ("btn", "btn-danger",);
item3.innerHTML = "✕";
column3.appendChild(item3);
TodoItem.appendChild(column3);
tbody.appendChild(TodoItem);

item3.addEventListener("click", (e)=>{
    TodoItem.remove();
});
item2.addEventListener("click", (e)=>{
    alert ("OK");
});
inputElement.Value ="";

});


