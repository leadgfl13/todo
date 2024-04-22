// class for making aproject
import { format, compareAsc } from "date-fns"
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
    tododate.innerHTML = "Due: " + atodo.date
let remove = document.createElement('button')
remove.setAttribute('id','removetodo')
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

//Function to allow changes to the particular todo
function makeChanges(atodo){
    let formbox = document.createElement('div')
    formbox.setAttribute('id','editbox')
    let aform = document.createElement('div')
    aform.setAttribute('id','editform')  
 let nameinput = document.createElement('input')
 let namelabel = document.createElement('label')
    nameinput.setAttribute('placeholder', 'changename')
    namelabel.setAttribute('for','changename')
    namelabel.innerHTML = "New name"
    let editdescript = document.createElement('input')
    editdescript.setAttribute('placeholder', 'Change description')
    let saveedit = document.createElement('button')
    saveedit.innerHTML = 'Save changes'
    let editdate = document.createElement('input')
    editdate.setAttribute('placeholder', 'MM/DD/YY')


    saveedit.addEventListener('click',()=>{
        if(nameinput.value == ''){
            atodo.name = atodo.name
        }
        else{
            atodo.name = nameinput.value
        }
        if(editdescript.value == ''){
            atodo.description = atodo.description
        }
        else{
            atodo.description = editdescript.value
        }
        if(editdate.value == ''){
            atodo.date = atodo.date
        }
        else{
            atodo.date  = format(new Date(editdate.value), "MM/dd/yyyy");
        }
        aform.style.display = 'none'
        showTodos(atodo.project)
    })
    formbox.append(aform)
    aform.append(namelabel,nameinput, editdescript,editdate, saveedit)
    document.body.append(aform)

    
    
    

}




   

















