// class for making aproject

import {displayPage} from './form.js'
import { bringupForm } from './form.js'
import { clearForm } from './form.js'
import { subToDo } from './form.js'

const projects = []


export class makeProject{

    constructor(name, todolist =[]) {
        this.name = name
        this.todolist = todolist
//adds this project to the project array
    }
     addProject(){
        projects.push(this)
     }  
//adds the todo to the todolist
     addToDo(todoobject){
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



   

     //makes todo's
export class makeToDo{
    constructor(name){
        this.name = name
    }
}



//creates a list of current project buttons 
function showProjects(){
    let lastitem = (projects[projects.length -1])
    console.log(lastitem)
        let project = document.createElement('button')
        project.innerHTML = lastitem.name
        bottomleft.append(project)
        project.addEventListener('click', ()=>{
            console.log('I am project ' + lastitem.name)
            displayPage(lastitem)
            })
        }
    

export{showProjects}


   

















