// class for making aproject

import {displayPage} from './form.js'
import { bringupForm } from './form.js'
import { clearForm } from './form.js'
const projects = []


export class makeProject{

    constructor(name, todolist = []) {
        this.name = name
        this.todolist = todolist
//adds this project to the project array
    }
     addProject(){
        projects.push(this)
     }  
//adds the todo to the todolist
     addToDo(todoobject){
        console.log("currently adding " + todoobject.name + "to " + this.name)
        this.todolist.push(todoobject)
     }
//displays the name of all todos in the array
     showtodo(){
        bottomright.innerHTML = ''
        for(let i =0; i<this.todolist.length; i++){
            let todocard = document.createElement('div')
            todocard.innerHTML = this.todolist[i].name
            bottomright.append(todocard)
        }
     }
    }


    
    //initial default project
     let test = new makeProject('test')
     test.addProject()
     // Make an array of todo's, give the todo's a project property

     //makes todo's
export class makeToDo{
    constructor(name){
        this.name = name
    }
}



//creates a list of current project buttons
function showProjects(){
    bottomleft.innerHTML = ''
    for(let i =0; i<projects.length; i++){
        let project =document.createElement('button')
        let currentproject = projects[i]
        project.innerHTML = projects[i].name
        bottomleft.append(project)
        project.addEventListener('click', ()=>{
            displayPage(currentproject)
            })
        }
    }

export{showProjects}


   

















