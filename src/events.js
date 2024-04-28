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
// NNED TO FIX THIS STILL!!!!!!!-----------------------------------------------------------------------------------------
    let removelist = JSON.parse(localStorage.getItem('projectlist'))
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
        //delete button actions
        deleteproject.addEventListener('click',()=>{
          let answer = confirm("Are you sure?")
          if(answer == true){
          
            let blanktodos = JSON.parse(localStorage.getItem('todolist'))
            
            // deletes the project from the localstorage
                if(currentproject == projects[i]){
                    projects.splice(i,1)
                    removelist.splice(i,1)
                    localStorage.setItem('projectlist', JSON.stringify(projects))                 
                    showProjects()
                }
                //use filter metho

                for (let j = blanktodos.length -1; j >= 0; j--){
                blanktodos.splice([j],1);
                todos.splice(j,1)
                localStorage.setItem('todolist', JSON.stringify(todos))
                }
                showTodos(currentproject)
                

                    //for(let j =0; (j<blanktodos.length); j++){

                  //  if(currentproject.name ==blanktodos[j].project){
                   //     blanktodos.splice(j,1)
                   //     todos.splice(j,1)
                   //     localStorage.setItem('todolist', JSON.stringify(todos))
                   //     showTodos(currentproject)

                 //   }
               // }

            }
            else{return}
        }
        
            )
            





        project.innerHTML = currentproject.name
        bottomleft.append(container)
        project.addEventListener('click', ()=>{
            showTodos(currentproject.name)
            })
        
    }}
export{showProjects}

let todobutton = document.getElementById('addtodo')
todobutton.addEventListener('click',()=>{
    bringupForm()
    makecheckbox()
})