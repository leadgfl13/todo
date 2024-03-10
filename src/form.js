import {makeToDo} from './project'
import{displayToDo} from './project'
import{projectVis} from './project'


function formappear(project){
    let bottomright = document.getElementById('bottomright')

let form = document.createElement('form')
form.setAttribute('id', 'form')
let nameinput = document.createElement('input')
Object.assign(nameinput,{
    type:'text',
    id: 'name',
    name:'name',
    class: 'inputs'
})
let descinput = document.createElement('input')
Object.assign(descinput,{
    type:'text',
    id: 'desc',
    name:'desc',
    class: 'inputs'
})
let dateinput = document.createElement('input')
Object.assign(dateinput,{
    type:'num',
    id: 'date',
    name:'date',
    class: 'inputs'
})
let prioinput = document.createElement('input')
Object.assign(prioinput,{
    type:'num',
    id: 'prio',
    name:'prio',
    class: 'inputs'
})

let namelabel = document.createElement('label')
Object.assign(namelabel,{
    for:'name',
    innerHTML: "Name"
})
let desclabel = document.createElement('label')
Object.assign(desclabel,{
    for:'desc',
    innerHTML: "Description"
})
let datelabel = document.createElement('label')
Object.assign(datelabel,{
    for:'date',
    innerHTML: "Date"
})
let priolabel = document.createElement('label')
Object.assign(priolabel,{
    for:'prio',
    innerHTML: "Priority"
})

form.append(namelabel,nameinput, desclabel, descinput,datelabel, dateinput, priolabel,prioinput)
let submittodo = document.createElement('button')
submittodo.setAttribute('id', 'todobutton')
submittodo.setAttribute('type', 'submmit')
form.append(submittodo)

submittodo.addEventListener("click",(e)=>{
    let first = nameinput.value
    let second = descinput.value
    let third = dateinput.value
    let fourth = prioinput.value
    e.preventDefault()
    let something = (makeToDo(first,second,third,fourth))
    project.list.push(something)
    console.log(project.list)
})
bottomright.append(form)
projectVis()

}



export{formappear}

//this will be where the form lives



