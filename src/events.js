import { bringupForm } from "./form"
import {showTodos} from "./project"
import {makecheckbox} from "./form"

 let projects = []
 let todos = []

export {projects}
export {todos}




//creates a list of current project buttons 
function showProjects(){
    bottomleft.innerHTML = ''
    let newprojects = (JSON.parse(localStorage.getItem('projectsstring')))
    console.log(newprojects)
    for(let i = 0; i<newprojects.legnth;i++){
        projects.push(newprojects[i])
    }
  
    
    for(let i = 0; i<projects.length; i++){
        let currentproject = projects[i]
        let project = document.createElement('button')
        project.innerHTML = currentproject.name
        bottomleft.append(project)
        project.addEventListener('click', ()=>{
            showTodos(currentproject.name)
            })
        }
}
export{showProjects}

let todobutton = document.getElementById('addtodo')
todobutton.addEventListener('click',()=>{
    bringupForm()
    makecheckbox()
})