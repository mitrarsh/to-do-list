var todoEl= document.getElementById("todo");
var inputEl= document.getElementById("input");
var addbtnEl= document.getElementById("addbtn");

var addOnClick= function(){
    var task= input.value.trim();
    if(task!==""){
    var li= document.createElement("li");
    li.textContent=task
    todoEl.appendChild(li);
    inputEl.value="";}
};

addbtnEl.addEventListener("click",addOnClick);