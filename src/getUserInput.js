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

const deleteBtn = () =>{
    const delBtn = document.createElement("button")
    delBtn.classList.add("delBtn")
    delBtn.textContent = "X"
    return delBtn;
}

const editBtn = () => {
    const editBtn = document.createElement("button")
    editBtn.classList.add("editBtn")
    editBtn.textContent = 'Edit'
    editBtn.setAttribute("type", "button")
    return editBtn
}

const menuBtn = () => {
    const menuBtn = document.createElement("button")
    menuBtn.classList.add("menuBtn")
    const p = document.createElement('h6')
    p.textContent = "..."
    menuBtn.appendChild(p)
    menuBtn.setAttribute("type", "button")
    return menuBtn
}

const popOutMenu = () => {
    const popOut = document.createElement("div")
    popOut.classList.add("popWindow")
    const deleteTab = document.createElement("div")
    deleteTab.classList.add("tab")
    const MenuTitle1 = document.createElement("h3")
    MenuTitle1.textContent = "Delete"
    const imgTrash = document.createElement("img")
    imgTrash.classList.add("Iconimg")
    imgTrash.src = "../src/images/garbage.png"
    
    deleteTab.appendChild(MenuTitle1)
    const renameTab = document.createElement("div")
    renameTab.classList.add("tab")
    const MenuTitle2 = document.createElement("h3")
    MenuTitle2.textContent = "Rename"
    const imgRename = document.createElement("img")
    imgRename.classList.add("Iconimg")
    imgRename.src = "../src/images/edit.png"
    
    renameTab.appendChild(MenuTitle2)
    const moveTo = document.createElement("div")
    moveTo.classList.add("tab")
    const MenuTitle3 = document.createElement("h3")
    MenuTitle3.textContent = "Move to"
    const imgMove = document.createElement("img")
    imgMove.classList.add("Iconimg")
    imgMove.src = "../src/images/right.png"

    moveTo.appendChild(MenuTitle3)
    popOut.appendChild(deleteTab)
    popOut.appendChild(renameTab)
    popOut.appendChild(moveTo)
    MenuTitle1.prepend(imgTrash)
    MenuTitle2.prepend(imgRename)
    MenuTitle3.prepend(imgMove)
    return popOut
}

const displayTask = () => {
    const taskDisplay = document.createElement("li")
    const span = document.createElement("span")
    span.textContent = getinput;
    taskDisplay.appendChild(span)
   
   
    taskDisplay.appendChild(deleteBtn())
    taskDisplay.appendChild(editBtn())
    taskDisplay.appendChild(menuBtn())
    
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

input1.addEventListener("submit", (e) => {
    e.preventDefault();
})

list.addEventListener("click", (e) =>{
        const button = e.target;
        const li = button.parentNode;
        console.log(li)
        const ul = li.parentNode;
        if (button.textContent === 'X'){
        ul.removeChild(li);    
        }else if(button.textContent === 'Edit'){
            list.addEventListener('keypress', function (e) {    //Preventing user from using 'Enter' after pressing edit
                if (e.key === 'Enter') {
                    e.preventDefault();
                    return false;
                }
                
            });
            const span = li.firstElementChild;;
        const input = document.createElement('input');
        input.type = 'text';
        input.value = span.textContent;
        li.insertBefore(input, span);
        li.removeChild(span);
        button.textContent = 'save'
        }else if(button.textContent === 'save'){
            const input = li.firstElementChild;
            const span = document.createElement('span');
            span.textContent = input.value;
            li.insertBefore(span, input);
            li.removeChild(input);
            button.textContent = 'Edit';
        }
})



export  {input, getTask, popOutMenu, submitTask, getinput}