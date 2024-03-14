// global variables
let testproject = makeProject('test')
const projects = [testproject]



let projectbutton = document.getElementById('makeproject')
let bottomright = document.getElementById('bottomright')
let bottomleft = document.getElementById('bottomleft')

//factory function for making new project
function makeProject(name){
    const list = []

return{
    name, list
}
}

// factory function for todo's
function makeTodo(name, description, priority, date){
    return{name, description, priority, date}
}
// IIFE for containing adding logic to the make project button, and attaches displayProjects
// to each project button
let makeprojects = (()=>{
    projectbutton.addEventListener('click',()=>{
        console.log("Clearing current Projects")
        clearProjects()

        let projectname = prompt('What is your project name?')
        let newproject = makeProject(projectname)
        console.log('Adding to project list')
        projects.push(newproject)
        console.log(projects.length)
        displayProjects()
    })
})()
export{makeprojects}


//creates project buttons
function displayProjects(){
    for (let i =0; i<projects.length; i++){
        let thisproject = projects[i]
        let projectbox = document.createElement('button')
        projectbox.innerHTML= thisproject.name
        projectbox.setAttribute('class', 'project')
        projectbox.setAttribute('id', thisproject.name)
        bottomleft.append(projectbox)
        projectbox.addEventListener('click',()=>{
            todoDisplay(thisproject)

        })
}
}
export{displayProjects}

//removes projects to prevent them from being displayed twice
function clearProjects(){
    if (bottomleft.innerHTML){
        console.log('Clearing projects')
        bottomleft.innerHTML = ''
    }
    else{
    console.log("Nothing to see here")
}}
export{clearProjects}




//Module to display todo's.  Currently takes project and ties it to the display
function todoDisplay(project){
    bottomright.innerHTML = ''
   displayToDo(project)
        let addstodo = document.createElement('button')
        addstodo.innerHTML = 'Add to Do'
        bottomright.append(addstodo)
        //will need to create a form, and then add submit form as the event listener with the project passed through
        addstodo.addEventListener('click',()=>{
            
            createForm(project)
        })
    }

// Function to submit the data in the form and then save it to the object.  Will need to run the display project again
//to update the page.  Will be added as event listener on submit form button
function createForm(thecurrentproject){
    let form = document.getElementById('form')
    form.style.display = 'flex'
    console.log(thecurrentproject)
    let name = document.getElementById('name')
    let description = document.getElementById('description')
    let priority = document.getElementById('priority')
    let date = document.getElementById('date')
    let subtodo =  document.getElementById('subtodo')
    subtodo.addEventListener('click',(e)=>{
        e.preventDefault()    
        addToDo(thecurrentproject)
        name.value = ''
        description.value = ''
        priority.value = ''
        date.value = ''
        form.style.display = 'none'
       
    })


}
export{createForm}


function addToDo(project){
    let name = document.getElementById('name').value
    let description = document.getElementById('description').value
    let priority = document.getElementById('priority')
    let date = document.getElementById('date')
    let thistodo = makeTodo(name, description, priority, date)
    project.list.push(thistodo)
    console.log(project.list)
    //displayToDo(project)
}

function displayToDo(project){
    let cards = document.getElementsByClassName('todocards')
    while(cards[0]){
    cards[0].parentNode.removeChild(cards[0])
    }
    

    for(let i = 0; i<project.list.length; i++){
        let todocard = document.createElement('div')
        todocard.setAttribute('id', 'todocard')
        todocard.setAttribute('class', 'todocards')
        let list = project.list
        let name = document.createElement('div')
        let description = document.createElement('div')
        name.innerHTML = list[i].name
        description.innerHTML = list[i].description
        todocard.append(name, description)
        bottomright.append(todocard)
        
    }
    
}

