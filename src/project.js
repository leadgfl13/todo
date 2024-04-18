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
    constructor(name, project,priority, description, date){
        this.name = name
        this.project = project
        this.priority = priority
        this.description = description
        this.date = date
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
    card.addEventListener('mouseenter',()=>{
        descriptdiv.style.display = 'block'
    })
    card.addEventListener('mouseleave',()=>{
        descriptdiv.style.display = 'none'
    })
    card.setAttribute('id','todocard')
    let todoname = document.createElement('div')
    todoname.innerHTML = atodo.name
    todoname.setAttribute('id', 'todoname')
    let descriptdiv = document.createElement('div')
    descriptdiv.setAttribute('id', 'desdiv')
    descriptdiv.innerHTML =atodo.description
    let tododate = document.createElement('div')
    tododate.innerHTML = atodo.date
let remove = document.createElement('button')
remove.setAttribute('id','removetodo')
remove.innerHTML = 'Delete'
remove.addEventListener('click',()=>{  // ***************** fix deletion
    for(let i = 0; i<todos.length; i++){
        if (todos[i].name == atodo.name){
            console.log(i)
        todos.splice(i,1)     
 }

 todos.sort(function(high, med, low){return high-med-low});

 showTodos(atodo.project)

    }

})
let edit = document.createElement('button')
edit.setAttribute('id', 'edit')
edit.innerHTML ='Edit'
edit.addEventListener('click',(e)=>{
    e.preventDefault
    console.log("test")
    makeChanges(atodo)})
    card.append(todoname,descriptdiv, tododate, remove, edit)

    bottomright.append(card)
    if(atodo.priority == "low"){
        card.style.border = '4px solid blue'
    }
    if(atodo.priority == "med"){
        card.style.border = '4px solid green'
    }
   
     if(atodo.priority == "high"){
        card.style.border = '4px solid red'
    }

}


function makeChanges(atodo){
    let aform = document.createElement('div')
    aform.setAttribute('id','editform')
    let nameinput = document.createElement('input')
    let saveedit = document.createElement('button')
    saveedit.innerHTML = 'Save changes'
    saveedit.addEventListener('click',()=>{
        atodo.name = nameinput.value
        aform.style.display = 'none'
        showTodos(atodo.project)
    })
    aform.append(nameinput, saveedit)
    document.body.append(aform)

    
    
    

}




   

















