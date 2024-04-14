import { bringupForm } from "./form"
import {showTodos} from "./project"

 let projects = []
 let todos = []

export {projects}
export {todos}




//creates a list of current project buttons 
function showProjects(){
    bottomleft.innerHTML = ''
    for(let i = 0; i<projects.length; i++){
        let currentproject = projects[i]
        let project = document.createElement('button')
        project.innerHTML = currentproject.name
        bottomleft.append(project)
        project.addEventListener('click', ()=>{
            console.log("Hello I have been clicked")
            showTodos(currentproject.name)
            })
        }
}
export{showProjects}

let todobutton = document.getElementById('addtodo')
todobutton.addEventListener('click',()=>{
    console.log("Add todo")
    bringupForm()
})