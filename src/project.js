import { formappear  } from './form';

// an array to hold the projects



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
        }
    }
}
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

        }
    }
}
export{makeToDo}







//function to create project visual
function projectVis(){
    clearProjects()
    for(let i =0; i<projects.length; i++){
        let bottomright = document.getElementById('bottomright')
        console.log(projects.length)
        let project = document.createElement('div')
        project.setAttribute('id','project')
        bottomright.append(project)
        let todobutton = document.createElement('button')
        todobutton.innerHTML = 'add todo'
        todobutton.setAttribute('id', 'todobutton')
        project.append(todobutton)
        todobutton.addEventListener('click',()=>{
            formappear(projects[i])
        })
    }
}
   
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

// Need a factory function for toDo

// Need a function that takes Todo's and then assigns them to a project?

//So there will be a make new to-do button, a make new project button, and thena  functon that 
//organizes the 


