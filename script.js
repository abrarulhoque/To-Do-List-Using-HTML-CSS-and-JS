const taskBox = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskContainer = document.getElementById('taskContainer');

addBtn.addEventListener("click", function(){
    if(taskBox.value == ''){
        alert('You must write something');
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = taskBox.value;
        taskContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    taskBox.value = '';
})

taskContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
})