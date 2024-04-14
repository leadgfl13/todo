import {todos} from "./events"
import { makeToDo } from "./project"


let form = document.getElementById('forms')
let submission = document.getElementById('subtodo')
    submission.addEventListener('click',(e)=>{
        e.preventDefault()
        clearForm()
        console.log("Am I getting called more than once?")
        form.style.display = 'none'
    })

//makes a todo object, adds it to the current project and then clears the form
function clearForm(){
    let labelname = document.getElementById('labelname')
    let ntodo = new makeToDo(labelname.value)
    todos.push(ntodo)
    console.log(todos.length)
    description.value = ' '
    labelname.value =' '
    priority.value = 0
    date.value = 0
}
export{clearForm}






//brings up the form for adding a todo.  Currently has the right project
function bringupForm(){
    let form = document.getElementById('forms')
    form.style.display = 'flex'   
    }


export{bringupForm}


