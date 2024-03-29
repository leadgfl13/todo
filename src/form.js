import { makeToDo } from "./project"

//adds a button for adding todo's to the top, and brings up the form for making a todo
function displayPage(current){
    current.showtodo()
    topright.innerHTML = ''
    let todobutton = document.createElement('button')
    todobutton.innerHTML = current.name
    topright.append(todobutton)
    todobutton.addEventListener('click',()=>{
        bringupForm(current)
    })
}
export{displayPage}



//makes a todo object, adds it to the current project and then clears the form
function clearForm(current){
    let labelname = document.getElementById('labelname')
    let ntodo = new makeToDo(labelname.value)
    console.log ("CURRENT IS " + current.name)
    current.addToDo(ntodo)
    console.log(current.todolist)
    current.showtodo()
    description.value = ' '
    labelname.value =' '
    priority.value = 0
    date.value = 0
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
export {subToDo}


//brings up the form for adding a todo.  Currently has the right project
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


