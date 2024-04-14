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
    constructor(name, project,priority){
        this.name = name
        this.project = project
        this.priority =priority
    }
}


export function showTodos(projectname){
    bottomright.innerHTML = ''
    for(let i = 0; i<todos.length; i++){
        if(todos[i].project == projectname){
            let thistodo = todos[i]
            console.log("We have a match!")
            makeCard(thistodo)
            
        }
    }
}

function makeCard(atodo){
    let card = document.createElement('div')
    card.setAttribute('id','todocard')
    card.innerHTML = atodo.name
    bottomright.append(card)
    console.log(atodo.priority)
    if(atodo.priority ==1){
        card.style.backgroundColor = 'blue'
    }
    if(atodo.priority == 2){
        card.style.backgroundColor = 'green'
    }
    if(atodo.priority == 3){
        card.style.backgroundColor = 'yellow'
    }
     if(atodo.priority == 4){
        card.style.backgroundColor = 'red'
    }

}





   

















