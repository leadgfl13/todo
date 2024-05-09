// class for making aproject
import { format, compareAsc } from "date-fns"
import{todos} from "./events"
import {displayPage} from './form.js'
import { bringupForm } from './form.js'
import { clearForm } from './form.js'
import {subToDo} from './form.js'
import { projects } from './events'
import { todosview } from './events'



//function completionCheck(atodo){

//localStorage.setItem('todolist', JSON.stringify(todos) )
//showTodos(atodo.project)


//}

export class makeProject{

    constructor(name) {
        this.name = name
    }


//adds this project to the project array
     addProject(){
        projects.push(this)
        localStorage.setItem('projectlist', JSON.stringify(projects) )
     }  

    
    }


     //makes todo's
export class makeToDo{
    constructor(name, project,priority, description, date, done){
        this.name = name
        this.project = project
        this.priority = priority
        this.description = description
        this.date = date
        this.done = done
}}

// goes through the todo list and makes a card for each todo that matches the projectname
export function showTodos(projectname){
    let bottomright=document.getElementById('bottomright')
    bottomright.innerHTML = ''
    let heading = document.getElementById('heading')
    heading.innerHTML = projectname
    for(let i = 0; i<todos.length; i++){
        if(todos[i].project == projectname){
            let thistodo = todos[i]
            makeCard(thistodo)
        }
    
         }
         if (bottomright.innerHTML == ''){
            bottomright.style.fontSize = '48px'
            heading.innerHTML =  ' No todos in ' + projectname
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

remove.addEventListener('click',()=>{
    for(let i = 0; i<todos.length; i++){
        if (todos[i].name == atodo.name){
            console.log(i)
            todos.splice(i,1)     
 }
    }

    let removelist = JSON.parse(localStorage.getItem('todolist'))
    for(let i = 0; i<removelist.length; i++){
        if(removelist[i].name === atodo.name){
            removelist.splice(i,1) 
            console.log(removelist + 'item removed')
            localStorage.setItem('todolist', JSON.stringify(todos))
        }
    }
    showTodos(atodo.project)

})



//the edit button and its functionality
let edit = document.createElement('button')
edit.setAttribute('id', 'edit')
edit.addEventListener('click',(e)=>{
    onsubmit = "return false"
    e.preventDefault
    console.log("test")
    makeChanges(atodo)})
    card.append(todoname, tododate,descriptdiv, remove, edit)

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

   console.log(atodo.done)
    if(atodo.done == 'true'){
        console.log("hello")
        card.setAttribute('id', 'complete')
    }
}

//Function to allow changes to the particular todo
function makeChanges(atodo){

    let formbox = document.createElement('div')
    formbox.setAttribute('id','editbox')
    let aform = document.createElement('div')
    let canceledit = document.createElement('button')
    canceledit.setAttribute('id','canceledit')
    canceledit.innerHTML = 'Cancel'
    canceledit.addEventListener('click',()=>{
        aform.style.display = 'none'
    })
    let editradio = document.createElement('div')
    editradio.setAttribute('id','editradio')
    let completioncontainer = document.createElement('div')
    //test to add radio
    let completecheck = document.createElement('input')
    Object.assign(completecheck,{
        type:'checkbox',
        id: 'completecheck'
    })
    let completelabel = document.createElement('label')
    Object.assign(completelabel,{
        for:completecheck,
        id: 'completelabel',
        innerHTML: "Completed"
})
completioncontainer.setAttribute('id','completioncontainer')
  completioncontainer.append(completelabel,completecheck)

    let lowlabel = document.createElement('label')
    let lowinput = document.createElement('input')
    Object.assign(lowlabel, {
        innerHTML: 'low',
        for: 'editlow',
    })
    Object.assign(lowinput, {
        type: 'radio',
        id: 'editlow',
        name: 'priority',
        value:'low'
    })
    let medlabel = document.createElement('label')
    let medinput = document.createElement('input')
    Object.assign(medlabel, {
        innerHTML: 'med',
        for: 'editmed',
    })
    Object.assign(medinput, {
        type: 'radio',
        id: 'editmed',
        name: 'priority',
        value:'med'
    })
    let highlabel = document.createElement('label')
    let highinput = document.createElement('input')
    Object.assign(highlabel, {
        innerHTML: 'high',
        for: 'edithigh',
    })
    Object.assign(highinput, {
        type: 'radio',
        id: 'edithigh',
        name: 'priority',
        value:'high'
    })

editradio.append(lowlabel,lowinput, medlabel, medinput, highlabel, highinput)
    
    aform.setAttribute('id','editform')  
 let nameinput = document.createElement('input')
    nameinput.setAttribute('placeholder', 'changename')
    let editdescript = document.createElement('textarea')
    editdescript.setAttribute('placeholder', 'Change description')
    let saveedit = document.createElement('button')
    saveedit.setAttribute('id', 'saveedit')
    saveedit.innerHTML = 'Save changes'
    let editdate = document.createElement('input')
    editdate.setAttribute('placeholder', 'MM/DD/YY')
    if(atodo.done =='true'){
        completecheck.checked = true
    }
    if(atodo.done == 'false'){
        completecheck.checked = false;
    }


    

    saveedit.addEventListener('click',(e)=>{
       
        if(completecheck.checked){
            atodo.done = "true"
        }
        else{
            atodo.done = "false"
        }
        
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
        
        if(lowinput.value == '' ||medinput.value == ''  || highinput.value == ''){
            atodo.priority ==atodo.priority
        }
        else{
            if(lowinput.checked ==true){ 
            atodo.priority=lowinput.value
            }
            if(medinput.checked ==true){
            atodo.priority=medinput.value
            }
            if(highinput.checked ==true){
                atodo.priority=highinput.value
                }}
       //resetting the values
       localStorage.setItem('todolist', JSON.stringify(todos))

       showTodos(atodo.project)
       aform.style.display = 'none'
       

       console.log('test')
    } 
    

    )
    formbox.append(aform)

    let buttonholder = document.createElement('div')
    buttonholder.setAttribute('id','buttonholder')
    buttonholder.append(saveedit,canceledit)
    aform.append(nameinput, editdescript,editdate, editradio,completioncontainer,buttonholder)
    document.body.append(aform)

}

















