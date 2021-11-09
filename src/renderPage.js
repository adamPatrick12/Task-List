import print from "./renderObject"

const input = () => {
    const input = document.createElement("input")
    input.setAttribute("type", "submit")
    input.id = "input1"
    return input
}

// const getTask = () =>{
//     const getinput = document.getElementById("input1").value
//     return getinput;
// }

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

    const ToDoContainer = document.createElement("div")
    ToDoContainer.classList.add("toDoListContainer")
    
    const firstGroup = document.createElement("div")
    firstGroup.textContent = 'To Do'
    firstGroup.classList.add("toDoBlock")
    ToDoContainer.appendChild(firstGroup)


    const secondGroup = document.createElement("div")
    secondGroup.textContent = 'Doing'
    secondGroup.classList.add("toDoBlock")
    ToDoContainer.appendChild(secondGroup)

    const thirdGroup = document.createElement("div")
    thirdGroup.textContent = 'Done'
    thirdGroup.classList.add("toDoBlock")
    ToDoContainer.appendChild(thirdGroup)

    // thirdGroup.appendChild(print())

    
    firstGroup.appendChild(input())
    // console.log(getTask())
    

    content.appendChild(topBar)
    content.appendChild(headImg)
    content.appendChild(instructions)
    content.appendChild(lineBreak)
    content.appendChild(ToDoContainer)
}




export default renderPage;