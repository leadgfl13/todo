// class for making aproject

import {displayPage} from './form.js'
import { bringupForm } from './form.js'
import { clearForm } from './form.js'
import {subToDo} from './form.js'

const projects = []


export class makeProject{

    constructor(name) {
        this.name = name
        this.todolist = []
//adds this project to the project array
    }

     addProject(){
        projects.push(this)
        return
     }  

//adds the todo to the todolist
     addToDo(todoobject){
        console.log("Checking the project... it is " + this.name)
        this.todolist.push(todoobject)
        console.log("currently there are " + this.todolist.length + " todo's")
        return

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


     //makes todo's
export class makeToDo{
    constructor(name){
        this.name = name
    }
}



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
            displayPage(currentproject)
            })
        }
}

export{showProjects}


   

















