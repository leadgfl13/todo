import { makeToDo } from "./project"

//adds a button for adding todo's to the top, and brings up the form for making a todo
function displayPage(current){
    current.showtodo()
    topright.innerHTML = ''
    let addtodo = document.createElement('button')
    addtodo.setAttribute('id', 'addtodo')
    topright.append(addtodo)
    addtodo.innerHTML = 'add to do'
    addtodo.addEventListener('click',()=>{
        bringupForm(current)
    })
}
export{displayPage}



//makes a todo object, adds it to the current project and then clears the form
function clearForm(current){
    let labelname = document.getElementById('labelname')
    let ntodo = new makeToDo(labelname.value)
    console.log ("CURRENT PROJECT IS " + current.name)
    console.log(current.todolist)
    current.todolist.push(ntodo)
    console.log(current.todolist.length)
    description.value = ' '
    labelname.value =' '
    priority.value = 0
    date.value = 0
    current.showtodo()
}
export{clearForm}






//brings up the form for adding a todo.  Currently has the right project
function bringupForm(theproject){
    let form = document.getElementById('forms')
    form.style.display = 'flex'   
    let submission = document.getElementById('subtodo')
    submission.addEventListener('click',(e)=>{
        e.preventDefault()
        clearForm(theproject)
        console.log("Am I getting called more than once?")
        form.style.display = 'none'
    })
 }

export{bringupForm}


