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
        this.priority = priority
    }
}

// goes through the todo list and makes a card for each todo that matches the projectname
export function showTodos(projectname){
    bottomright.innerHTML = ''
    for(let i = 0; i<todos.length; i++){
        if(todos[i].project == projectname){
            let thistodo = todos[i]
            makeCard(thistodo)
            
        }
    }
}
//makes a card to physically represent the todo
function makeCard(atodo){
    let card = document.createElement('div')
    card.setAttribute('id','todocard')
    let todoname = document.createElement('div')
    //area where the todocard needs to be formatted
    todoname.innerHTML = atodo.name
    let description = document.createElement('div')
    description.innerHTML =atodo.description
    card.append(todoname,description)

    bottomright.append(card)
    console.log(atodo.priority.value)
    if(atodo.priority == "low"){
        card.style.backgroundColor = 'blue'
    }
    if(atodo.priority == "med"){
        card.style.backgroundColor = 'green'
    }
   
     if(atodo.priority == "high"){
        card.style.backgroundColor = 'red'
    }

}





   

















