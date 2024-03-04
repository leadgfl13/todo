import './style.css';
let bottomright = document.getElementById('bottomright')

function formappear(){
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

let addtodo =document.createElement('button')
addtodo.setAttribute('id', 'todobutton')

form.append(namelabel,nameinput,desclabel,descinput,datelabel,dateinput,priolabel,prioinput, addtodo)

bottomright.append(form)
addtodo.addEventListener("click",()=>{

    (nameinput.value),(descinput.value),(dateinput.value),(prioinput.value)})




export{formappear}

//this will be where the form lives