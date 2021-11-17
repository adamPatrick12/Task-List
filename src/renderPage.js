import {groupInput2} from "./group2"
import {groupInput, ToDoContainer} from "./group1"
import {groupInput3} from "./group3"
import {groupInput4} from "./group4"
import {groupInput5} from "./group5"
import header from "./images/header-Img.jpg"

let groupCount = 0;

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
    const img = new Image()
    img.src = header
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
    
       newGroup.addEventListener("click", (e) =>{
        
        if(e.target.textContent === '+' && groupCount == 0){   
            groupCount++
            ToDoContainer.appendChild(groupInput())
        }else if(e.target.textContent === '+' && groupCount == 1){
            groupCount++
            ToDoContainer.appendChild(groupInput2())
        }else if(e.target.textContent === '+' && groupCount == 2){
            groupCount++
            ToDoContainer.appendChild(groupInput3())
        }else if(e.target.textContent === '+' && groupCount == 3){
            groupCount++
            ToDoContainer.appendChild(groupInput4())
        }else if(e.target.textContent === '+' && groupCount == 4){
            groupCount++
            ToDoContainer.appendChild(groupInput5())
        }

       
        })
        
        return newGroup 
    }
    
    ToDoContainer.appendChild(newGroupBtn())  
    
    content.appendChild(topBar)
    content.appendChild(headImg)
    content.appendChild(instructions)
    content.appendChild(lineBreak)
    content.appendChild(ToDoContainer)
    
  
}

  




export default renderPage;