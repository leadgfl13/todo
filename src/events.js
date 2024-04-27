import { bringupForm } from "./form"
import {showTodos} from "./project"
import {makecheckbox} from "./form"

 let projects = JSON.parse(localStorage.getItem('projectlist')) || []
 let todos = JSON.parse(localStorage.getItem('todolist')) || []

export {projects}
export {todos}




//creates a list of current project buttons 
function showProjects(){
    bottomleft.innerHTML = ''

    for(let i = 0; i<projects.length; i++){
        let currentproject = projects[i]
        let container = document.createElement('div')
        let project = document.createElement('button')
        container.append(project)
        container.setAttribute('id','container')
        project.setAttribute('id','project')
        let deleteproject = document.createElement('button')
        container.append(deleteproject)
        deleteproject.setAttribute('id', 'deleteproject')
        deleteproject.addEventListener('click',()=>{
            console.log(projects[i].name + " has  been clicked")
            let removelist = JSON.parse(localStorage.getItem('projectlist'))
            let removetodos = JSON.parse(localStorage.getItem('todolist'))
            // Need to remove the project name and update the localstorage
            for(let i =0; i<todos.length;i++){
                if(projects[i].name == todos[i].project){
                    console.log(todos[i].name + "There is a match")
                    removetodos.splice(i,1)
                    todos.splice(i,1)
                    localStorage.setItem('todolist', JSON.stringify(todos)) 
                    showTodos()                


                }
            }
            for(let i =0; i<projects.length; i++){
                if(currentproject == projects[i])
                projects.splice(i,1)
                removelist.splice(i,1)
                localStorage.setItem('projectlist', JSON.stringify(projects))                 
                showProjects()
                
            }
            //do same for any todos that match for
           
        
        })
        project.innerHTML = currentproject.name
        bottomleft.append(container)
    
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