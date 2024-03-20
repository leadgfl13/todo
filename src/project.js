// global variables
let testproject = makeProject('test')
const projects = [testproject]

var currentproject  = ''

let projectbutton = document.getElementById('makeproject')
let bottomright = document.getElementById('bottomright')
let bottomleft = document.getElementById('bottomleft')

let subtodo =document.getElementById('subtodo')

//ITS ADDING MULTIPLE EVENT LISTENERS!!!
subtodo.addEventListener('click',(event)=>{
    console.log(currentproject)
    event.preventDefault();
    console.log("I have been clicked")
    
   addtoList(currentproject)
})

//factory function for making new project
function makeProject(name){
    const list = []

return{
    name, list
}
}


// factory function for todo's
function makeTodo(one, two, three, four){
    return{one, two, three, four}
}
//clears the projects and then displays them so only recent run through is displayed
 projectbutton.addEventListener('click',()=>{
        console.log("Clearing current Projects")
        let addproject = makeProject(prompt("Name of new project?"))
        projects.push(addproject)
        clearProjects()
        displayProjects()
    })


//creates project buttons
function displayProjects(){
    for(let i = 0; i<projects.length; i++){
        let thisproject = projects[i]
        let projectbox = document.createElement('button')
        projectbox.innerHTML = thisproject.name
        projectbox.setAttribute('class', 'project')
        projectbox.setAttribute('id', thisproject.name)
        bottomleft.append(projectbox)
        projectbox.addEventListener('click',()=>{
        let addbutton = document.createElement('button')
         addbutton.innerHTML = 'Add todo'
        bottomright.append(addbutton)
        addbutton.addEventListener('click',()=>
        createForm(thisproject)
            )
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
    let form = document.getElementById('forms')
    form.style.display = 'flex'
     thecurrentproject = currentproject
   return{currentproject}
     

    }
export{createForm}


function addtoList(project){
    let name = document.getElementById('labelname').value
    let description = document.getElementById('description').value
    let priority = document.getElementById('priority')
    let date = document.getElementById('date')
    let todo = makeTodo(name, description, priority, date)
    console.log(todo)
    console.log(project)
    console.log(currentproject)
    project.list.push(todo)
    forms.style.display = 'none'
}


function getProject(){
    return{currentproject}
}

export{getProject}
