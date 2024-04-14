import {makeToDo} from './project'
import {makeProject} from './project'
import style from './style.css'
import { showProjects } from './events'
import { clearForm } from './form'
import  {projects }from './events'


let bottomleft = document.getElementById('bottomleft')
let addproject = document.getElementById('makeproject')
 //initial default project
 let test = new makeProject('test')
 test.addProject()
 // Make an array of todo's, give the todo's a project property

addproject.addEventListener('click',()=>{
    console.log("I've been clicked")
    let newprojectname = prompt("What is the new project name?")
    if(newprojectname == null || newprojectname == ''){
        console.log("nothing")
        return
    }
    else{
        let newproject = new makeProject(newprojectname)
            newproject.addProject()
            showProjects()
    }
})






showProjects()




