import {formappear} from './form';

// an array to hold the projects


///  for each poject in the array make a button.  When the button is pressed make an HTML element that displays
// all of the todo's, and add an add-todobutton
let projects = []


function makeFirst(){
    let first = makeProject('default')
    projects.push(first)
    projectVis()
}
export{makeFirst}

//generate the layout for the page
let pageLayout =(()=>{
    let page = document.createElement('div')
    page.setAttribute('id','pagelayout')
    body. append(page)
    let topleft = document.createElement('div')
    topleft.setAttribute('id', 'topleft')
   let topright = document.createElement('div')
    topright.setAttribute('id', 'topright')
   let bottomleft = document.createElement('div')
    bottomleft.setAttribute('id', 'bottomleft')
   let bottomright = document.createElement('div')
    bottomright.setAttribute('id', 'bottomright')
    page.append(topleft,topright,bottomleft,bottomright)
})();
export{pageLayout}



// button for calling the project factory and displaying it
let projectbutton = (function (){
    const getProject = document.getElementById('makeproject')
    getProject.addEventListener('click',()=>{
        let Name = prompt("What is your project name")
        let currentp = makeProject(Name)
       projects.push(currentp)
        projectVis()
        renderTodo()
    }
)
})()
export{projectbutton}


//factory function for making projects
function makeProject(projectname){

    return{
        list:[],
        projectname:projectname,

        addToDo(addition){
            this.thing.push(addition)
        } }}

    
export{makeProject}



// factory function to make to-do's
function makeToDo(title, description, duedate, priority){
    return{
        title: title,
        description:description,
        duedate:duedate,
        priority:priority,

        addtoProject(project){
            project.append(title, description, duedate, priority)

        } }}
export{makeToDo}




//clears the project area, then iterates through project list.  Creates an element, and adds it to the page
//Calls the form function that brings a form when adding a todo, and then adds that form output to the list
// of toos in that project
function projectVis(){
    clearProjects()
    for(let i = 0; i<projects.length; i++){
        let bottomright = document.getElementById('bottomright')
        console.log(projects.length)
        let thisproject = projects[i]
        let projectID = projects[i].projectname
        let project = document.createElement('div')
        project.setAttribute('class', 'project')
        project.setAttribute('id', projectID)
        project.innerHTML = thisproject.projectname
        bottomright.append(project)
        let todobutton = document.createElement('button')
        todobutton.innerHTML = 'add todo'
        todobutton.setAttribute('id', 'todobutton')
        project.append(todobutton)

        todobutton.addEventListener('click',()=>{
            formappear(thisproject,projectID) 
        })
    }


}


export{projectVis}
   
function renderTodo(projectobject, projectid){
    clearToDos(projectobject, projectid)
    let currentproject = projectobject
    let list = currentproject.list
    let project = document.getElementById(projectid)
    for(let i =0; i<list.length; i ++){
        let todo = list[i]
        let base = document.createElement('div')
        base.setAttribute('id','todogrid')
        let name = document.createElement('div')
        name.setAttribute('id', 'todoname')
        name.innerHTML = todo.title
        base.append(name)
        project.append(base)
    }
}
export{renderTodo}


function clearProjects(){
    let bottomright = document.getElementById('bottomright')
    if(!bottomright){
        console.log("Hello")
        return
    }
    else{
        bottomright.innerHTML = ' '

    }
}



function clearToDos(thusproject, thediv){
    let thisdiv = document.getElementById('todogrid')
    if(!thisdiv){
        console.log("Hello")
        return
    }
    else{
        thisdiv.innerHTML = ' '

    }
}

export{clearToDos}