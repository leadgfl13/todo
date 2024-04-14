// class for making aproject
import{todos} from "./events"
import {displayPage} from './form.js'
import { bringupForm } from './form.js'
import { clearForm } from './form.js'
import {subToDo} from './form.js'
import { projects } from './events'
import { todosview } from './events'


export class makeProject{

    constructor(name) {
        this.name = name
    }


//adds this project to the project array
     addProject(){
        projects.push(this)
     }  
    }


     //makes todo's
export class makeToDo{
    constructor(name, project){
        this.name = name
        this.project = project
    }
}


export function showTodos(projectname){
    for(let i = 0; i<todos.length; i++){
        if(todos[i].project == projectname){
            console.log("We have a match!")
        }
    }
}





   

















