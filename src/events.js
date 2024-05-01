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
    let removelist = JSON.parse(localStorage.getItem('projectlist'))
    for(let i = 0; i<projects.length; i++){
        let container = document.createElement('div')
        container.setAttribute('id', 'leftcontainer')
        let project = document.createElement('button')
        container.append(project)
        container.setAttribute('id','container')
        project.setAttribute('id','project')
        let deleteproject = document.createElement('button')
        container.append(deleteproject)
        deleteproject.setAttribute('id', 'deleteproject')
        project.innerHTML = projects[i].name
        bottomleft.append(container)
        project.addEventListener('click', ()=>{
            showTodos(projects[i].name)
            })
        //delete button actions
        deleteproject.addEventListener('click',()=>{
          let answer = confirm("Are you sure?")
          if(answer == true){

            let blanktodos = JSON.parse(localStorage.getItem('todolist'))
            console.log("Here is the todolist" + blanktodos)
            for (let j = blanktodos.length -1; j >= 0; j--){
                if(blanktodos[j].project==projects[i].name)
                {
                console.log(blanktodos[j].project + " matches " + projects[i].name)
                todos.splice([j],1)
                localStorage.setItem('todolist', JSON.stringify(todos))
                }

                }
                
                showTodos(projects[0].name)
            
            // deletes the project from the localstorage
                
                    projects.splice(i,1)
                    removelist.splice(i,1)
                    localStorage.setItem('projectlist', JSON.stringify(projects))                 
                    showProjects()
                
                //use filter metho
                
                
                


            }
            else{return}
        }
        
            )
            
        
    }}
export{showProjects}

let todobutton = document.getElementById('addtodo')
todobutton.addEventListener('click',()=>{
    bringupForm()
    makecheckbox()
})