import {makeToDo} from './project'
import {makeProject} from './project'
import style from './style.css'
import { showProjects } from './events'
import { clearForm } from './form'
import  {projects }from './events'
import { showTodos } from './project'

showProjects()
console.log(projects.length)



let bottomleft = document.getElementById('bottomleft')
let addproject = document.getElementById('makeproject')
 //initial default project
 if (projects.length == 0){
    let home = new makeProject("Home")
    home.addProject()
 }
 
 showTodos(projects[0].name)


 // Make an array of todo's, give the todo's a project property

addproject.addEventListener('click',()=>{
    let newprojectname = prompt("What is the new project name?")
    if(newprojectname == null || newprojectname == ''){
        console.log("nothing")
        return
    }
    else{
        let newproject = new makeProject(newprojectname) //makes a new project
            newproject.addProject() //adds project to the array
            let projectsstring = JSON.stringify(newproject)
            localStorage.setItem('projectsstring',newproject)
            console.log(newproject)
            showProjects()
    }
})






showProjects()




