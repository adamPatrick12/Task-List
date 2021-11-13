import {submitTask, input, toDoBlock} from "./getUserInput"
import {toDoBlock2} from "./getUserInput2"

const renderPage = function (){

    const content = document.createElement("div")
    document.body.appendChild(content)

    const topBar = document.createElement("div")
    topBar.classList.add("topBar")
    const subTitle = document.createElement("span")
    subTitle.textContent = "✔️ Task List"
    topBar.appendChild(subTitle)

    const headImg = document.createElement("div")
    headImg.classList.add("header-img")
    const img = document.createElement("img")
    img.src = "../src/images/header-Img.jpg"
    headImg.appendChild(img)

    const instructions = document.createElement("div")
    instructions.classList.add("instruct")
    const infoText = document.createElement("h1")
    infoText.textContent = '✔️ Task List'
    instructions.appendChild(infoText)

    const info1 = document.createElement("p")
    info1.textContent = "Use this template to track your personal tasks."
    instructions.appendChild(info1)

    const info2 = document.createElement("p")
    info2.textContent = "Click + New to create a new task directly on this board."
    instructions.appendChild(info2)

    const info3 = document.createElement("p")
    info3.textContent = "Click new project to add new colume"
    instructions.appendChild(info3)

    const lineBreak = document.createElement("hr")

    
    
    const newGroupBtn = () => {
    
        const newGroup = document.createElement("div")
        newGroup.classList.add('groupBtn')
        newGroup.textContent = "+"
    
       newGroup.addEventListener("click", () =>{
        
        if(ToDoContainer.childElementCount > 1){
            ToDoContainer.insertBefore(toDoBlock2(), ToDoContainer.lastElementChild)
        }else{
            ToDoContainer.insertBefore(toDoBlock(), ToDoContainer.firstElementChild)
        }
        
       
        })
        
        return newGroup 
    }
    
    const ToDoContainer = document.createElement("div")
    ToDoContainer.classList.add("toDoListContainer")
    ToDoContainer.appendChild(newGroupBtn())    
    
    content.appendChild(topBar)
    content.appendChild(headImg)
    content.appendChild(instructions)
    content.appendChild(lineBreak)
    content.appendChild(ToDoContainer)
    
  
}

  




export default renderPage;