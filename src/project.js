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
console.log('hello I AM A PROJECT')
            let addtodo = document.createElement('button')
            addtodo.innerHTML = 'Add todo'
            bottomright.append(addtodo)
            addtodo.addEventListener('click',()=>
            console.log("I have been cicked"))
            createForm(projects[i])
            

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
}



