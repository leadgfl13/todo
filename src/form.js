import {todos} from "./events"
import { makeToDo } from "./project"
import {projects} from "./events"
let form = document.getElementById('forms')
let checkboxfield = document.getElementById('checkboxfield')


export function makecheckbox(){
    for(let i =0; i<projects.length; i++){
        let test = document.createElement('input')
        Object.assign(test, {
            type: 'radio',
            id: projects[i],
            name: "project"
        })
        let label = document.createElement('label')
        label.htmlFor = 'testing'
        Object.assign(label, {
            innerHTML: projects[i].name,
            id: 'labeltesting',
        })
      
 
        checkboxfield.append(label,test)

    }


}





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
    let thepriority = document.getElementsByTagName('priority')
    let radio =  document.querySelector('input[name="priority"]:checked').value;

    console.log(radio)
    let ntodo = new makeToDo(labelname.value, projectname.value, radio)
    console.log(thepriority)
    todos.push(ntodo)
    console.log(todos.length)
    description.value = ' '
    labelname.value =' '
    date.value = 0
}
export{clearForm}






//brings up the form for adding a todo.  Currently has the right project
function bringupForm(){
    let form = document.getElementById('forms')
    form.style.display = 'flex'   
    }


export{bringupForm}


