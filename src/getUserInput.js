import storeTask from "./storeTasks"
let getinput = "";
let num = 0

function Task (task, group){
    this.task = task
    this.group = group 
}

let newTask = new Task()


let list = document.createElement("ul")

const newInput = () =>{
    num++
    const input = document.createElement("input")
    return input
}

const makeInput = () => {
    const input1 = newInput()
    input1.setAttribute("type", 'text')
    input1.id = `task${num}`
    input1.setAttribute("placeholder", 'Enter Task')
   
    input1.addEventListener("submit", (e) => {
        e.preventDefault();
    })
   
    return input1
}

const getTask = () => {
    newTask.task = document.getElementById(`task${num}`).value
    document.querySelector('form').reset()
   return newTask.task
}

function displayTask()  {
    
    const taskDisplay = document.createElement("li")
    const span = document.createElement("span")
    span.textContent = newTask.task;
    taskDisplay.appendChild(span)
    taskDisplay.appendChild(menuButton.create())
    console.log(span)
    return taskDisplay
}

const submitTask = () => {
    
    const inputBtn = document.createElement("button")
    inputBtn.setAttribute("type", "sumbit")
    
    inputBtn.addEventListener("click", (e) =>{
    e.preventDefault()
        getTask()
       createList().appendChild(displayTask())
    })

    return inputBtn
}

function createList () {
    
    
    list.addEventListener("click", (e) =>{
        const button = e.target;
        const li = button.parentNode;
        const li2 = li.parentNode;
        if (button.textContent === '...'){
            if(li.childElementCount < 2){
                li.appendChild(popOutMenu())        //Making sure only one menu is appended
                
            }
        }
})

    return list

}

const input = () => {
    const form1 = document.createElement("form")
   
    form1.appendChild(makeInput())
    form1.appendChild(submitTask())
    form1.appendChild(createList())
    
 
    return form1
}


//Create group

const toDoBlock = () => {
    
    const block = document.createElement("div")
    block.textContent = 'To Do'
    block.classList.add("toDoBlock")
    block.appendChild(input())
    return block
}


//Create group

const menuButton = (() => {
   
   const create = () =>{
   const menuBtn = document.createElement("button")
    menuBtn.classList.add("menuBtn")
    const p = document.createElement('h6')
    p.textContent = "..."
    menuBtn.appendChild(p)
    menuBtn.setAttribute("type", "button")
    return menuBtn
   }
    return {create}
})()



const deleteTab = () => {
    const deleteTab = document.createElement("div")
    deleteTab.classList.add("tab")
    const MenuTitle1 = document.createElement("h3")
    MenuTitle1.textContent = "Delete"
    const imgTrash = document.createElement("img")
    imgTrash.classList.add("Iconimg")
    imgTrash.src = "../src/images/garbage.png"
    deleteTab.appendChild(MenuTitle1)
    MenuTitle1.prepend(imgTrash)
    
    
    return deleteTab

    
}

const renameTab = () => {
    const renameTab = document.createElement("div")
    renameTab.classList.add("tab")
    const MenuTitle2 = document.createElement("h3")
    MenuTitle2.textContent = "Rename"
    const imgRename = document.createElement("img")
    imgRename.classList.add("Iconimg")
    imgRename.src = "../src/images/edit.png"
    renameTab.appendChild(MenuTitle2)
    MenuTitle2.prepend(imgRename)
    return renameTab
}

const moveToTab = () => {
    const moveTo = document.createElement("div")
    moveTo.classList.add("tab")
    const MenuTitle3 = document.createElement("h3")
    MenuTitle3.textContent = "Move to"
    const imgMove = document.createElement("img")
    imgMove.classList.add("Iconimg")
    imgMove.src = "../src/images/right.png"
    moveTo.appendChild(MenuTitle3)
    MenuTitle3.prepend(imgMove)
    return moveTo
}



const popOutMenu = () => {
    const popOut = document.createElement("div")
    popOut.classList.add("popWindow")
   
    
    popOut.appendChild(deleteTab())
    popOut.appendChild(renameTab())
    popOut.appendChild(moveToTab())
    
    popOut.addEventListener("click", (e) => {
        const button = e.target;
        const bubble1 = button.parentNode;
        const bubble2 = bubble1.parentNode
        const bubble3 = bubble2.parentNode
        const bubble4 = bubble3.parentNode
        const bubble5 = bubble4.parentNode
        if (button.textContent === 'Delete'){
            bubble5.removeChild(bubble4)
        }else if(button.textContent === 'Rename'){
            list.addEventListener('keypress', function (e) {    //Preventing user from using 'Enter' after pressing edit
                if (e.key === 'Enter') {
                    e.preventDefault();
                    return false;
                }               
            });            
            const span = bubble4.firstElementChild;
            console.log(span)
            const input = document.createElement('input');
            input.type = 'text';
            bubble4.insertBefore(input, span);
            bubble4.removeChild(span); 
            button.textContent = 'Save'
        }else if(button.textContent === 'Save'){
            const input = bubble4.firstElementChild;
            const span = document.createElement('span');
            span.textContent = input.value;
            bubble4.insertBefore(span, input);
            bubble4.removeChild(input);
            button.textContent = 'Rename';
            bubble3.removeChild(bubble3.childNodes[1])  // remove popout onced saved
        }
       
    })
    
    return popOut
}



export  {input, getTask, popOutMenu, toDoBlock, submitTask, getinput}