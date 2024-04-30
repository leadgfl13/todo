import {todos} from "./events"
import { makeToDo } from "./project"
import {projects} from "./events"
import { showTodos } from "./project"
import { format, compareAsc } from "date-fns"


let form = document.getElementById('forms')
let checkboxfield = document.getElementById('checkboxfield')



export function makecheckbox(){
    checkboxfield.innerHTML =''
    for(let i =0; i<projects.length; i++){
        let label = document.createElement('label')
        label.htmlFor = 'testing'
        Object.assign(label, {
            innerHTML: projects[i].name,
            id: 'labeltesting',
        })
        let inputfield = document.createElement('div')
        inputfield.setAttribute('class', 'inputfield')
        let test = document.createElement('input')
        Object.assign(test, {
            type: 'radio',
            id: projects[i],
            name: "project",
            value: projects[i].name
        })
      
      
        inputfield.append(test, label)
        checkboxfield.append(inputfield)

    }


}





let submission = document.getElementById('subtodo')
    submission.addEventListener('click',(e)=>{
        e.preventDefault()
        clearForm()

        form.style.display = 'none'
    })

//makes a todo object, adds it to the current project and then clears the form
function clearForm(){
    let labelname = document.getElementById('labelname')
    let priority =  document.querySelector('input[name="priority"]:checked').value;
    let projectname =  document.querySelector('input[name="project"]:checked').value;
    let descriptionname = document.getElementById('description').value
    let datevalue = (document.getElementById('date').value)
    let duedate = format(new Date(datevalue), "MM/dd/yyyy");
    let ntodo = new makeToDo(labelname.value, projectname, priority, descriptionname, duedate)
    todos.push(ntodo)
    console.log(JSON.stringify(todos))
    localStorage.setItem('todolist', JSON.stringify(todos) )


    showTodos(projectname)
    console.log(todos.length)
    description.value = ' '
    labelname.value =' '
    date.value = ''
}
export{clearForm}






//brings up the form for adding a todo.  Currently has the right project
function bringupForm(){
    let form = document.getElementById('forms')
    form.style.display = 'flex'   
    }


export{bringupForm}


