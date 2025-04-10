var todoEl= document.getElementById("todo");
var inputEl= document.getElementById("input");
var addbtnEl= document.getElementById("addbtn");
var donetasksEl= document.getElementById("donetasks");
var errorEl = document.getElementById("error");

var addOnClick= function(){
    var task= inputEl.value.trim();
    if(task===""){
        errorEl.style.display="block";
        inputEl.classList.remove("error");
        void inputEl.offsetWidth;
        inputEl.classList.add("error");
        return;
    }
    errorEl.style.display="none"

    if(task!==""){
    var li= document.createElement("li");
    li.textContent=task;

    var deleteBtn= document.createElement("button");
    deleteBtn.textContent="🗑️";
    deleteBtn.style.marginLeft="0.5rem";
    deleteBtn.style.fontSize="2rem";
    deleteBtn.style.outline="0";

    deleteBtn.addEventListener("click",function(event){
        event.stopPropagation();
        li.remove();
    })

    li.addEventListener("click",function(){
        li.style.textDecoration= "line-through";
        li.remove();
        donetasksEl.appendChild(li);
    })

    li.appendChild(deleteBtn);

    todoEl.appendChild(li);
    inputEl.value="";
}
};

addbtnEl.addEventListener("click",addOnClick);
inputEl.addEventListener("keydown",function(event){
    if(event.key === "Enter"){addOnClick();};
}
);

inputEl.classList.add("error"); // when showing error
inputEl.classList.remove("error"); // when hiding it

