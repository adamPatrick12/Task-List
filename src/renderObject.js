import userTask from "./getUserInput"

const print = function (){

    const createObj = document.createTextNode("div")
    
    createObj.textContent = userTask()

    return createObj

}

export default print;