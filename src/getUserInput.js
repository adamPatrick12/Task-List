import storeTask from "./storeTasks"

const input1 = document.createElement("input")
input1.setAttribute("type", 'text')
input1.id = "task"
input1.setAttribute("placeholder", 'Enter Task')
const inputBtn = document.createElement("button")
inputBtn.setAttribute("type", "sumbit")
const list = document.createElement("ul")

let getinput = "";

const input = () => {
    const form1 = document.createElement("form")
    form1.appendChild(input1)
    form1.appendChild(inputBtn)
    form1.appendChild(list)
    return form1
}

const getTask = () => {
     getinput = document.getElementById("task").value
     document.querySelector('form').reset()
    return getinput
}

const displayTask = () => {
    const taskDisplay = document.createElement("li")
    const span = document.createElement("span")
    span.textContent = getinput;
    taskDisplay.appendChild(span)
    const delBtn = document.createElement("button")
    const editBtn = document.createElement("button")
    editBtn.classList.add("editBtn")
    editBtn.textContent = 'Edit'
    editBtn.setAttribute("type", "button")
    delBtn.classList.add("delBtn")
    delBtn.setAttribute("type", "button")
    delBtn.textContent = "X"
    taskDisplay.appendChild(delBtn)
    taskDisplay.appendChild(editBtn)
    list.appendChild(taskDisplay)
    return taskDisplay
}

const submitTask = () => {
    
    inputBtn.addEventListener("click", (e) =>{
        e.preventDefault()
        getTask()
        displayTask()
        storeTask()
    })
}

list.addEventListener("click", (e) =>{
        const button = e.target;
        const li = button.parentNode;
        console.log(li)
        const ul = li.parentNode;
        if (button.textContent === 'X'){
        ul.removeChild(li);    
        }else if(button.textContent === 'Edit'){
        const newEdit = li.firstElementChild;;
        const input = document.createElement('input');
        input.type = 'text';
        input.value = newEdit.textContent;
        li.insertBefore(input, newEdit);
        li.removeChild(newEdit);
        button.textContent = 'save'
        }else if(button.textContent === 'save'){
            const input = li.firstElementChild;
            const span = document.createElement('span');
            span.textContent = input.value;
            li.insertBefore(span, input);
            li.removeChild(input);
            button.textContent = 'edit';
        }
})



export  {input, getTask, submitTask, getinput}