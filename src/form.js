import { makeToDo } from "./project"

//adds a button for adding todo's to the top, and brings up the form for making a todo
function displayPage(current){
    current.showtodo()
topright.innerHTML = ''
    let todobutton = document.createElement('button')
    todobutton.innerHTML = 'Add todo'
    topright.append(todobutton)
    todobutton.addEventListener('click',()=>{
        bringupForm(current)

    })
}
export{displayPage}

//makes a todo object, adds it to the current project and then clears the form
function clearForm(current){
    let form = document.getElementById('forms')
    let labelname = document.getElementById('labelname')
    let description = document.getElementById('description')
    let priority = document.getElementById('priority')
    let date = document.getElementById('date')
    let thistodo = new makeToDo(labelname.value)
    console.log ("CURRENT IS " + current.name)
    current.addToDo(thistodo)
    console.log(current.todolist)
    current.showtodo(current)
    description.value = ' '
    labelname.value =' '
    priority.value = ' '
    date.value = ' '
}
export{clearForm}

//brings up the clear function
function subToDo(current){
    let form = document.getElementById('forms')
    let subtodo = document.getElementById('subtodo')
    subtodo.addEventListener('click',(e)=>{
        e.preventDefault()
        clearForm(current)
        form.style.display = 'none'

    })
}
//brings up the form for adding a todo
function bringupForm(current){
    let form = document.getElementById('forms')
    form.style.display = 'flex'   
    let subtodo = document.getElementById('subtodo')
    subtodo.addEventListener('click',(e)=>{
        e.preventDefault()
        clearForm(current)
        form.style.display = 'none'

    })
 }

export{bringupForm}


