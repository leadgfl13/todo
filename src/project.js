// an array to hold the projects

let projects = []



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
let projectbutton = (function makeproj(){
    const getProject = document.getElementById('makeproject')
    getProject.addEventListener('click',()=>{
        let pName = prompt("What is your project name")
        let currentp = makeProject(pName)
       projects.push(currentp)
        projectVis()
    }
)
})()
export{projectbutton}


//factory function for making projects
function makeProject(projectname){

    return{
        thing:[],
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




// function to display the projects
function display(){
    for(let i =0; i<projects.length; i++){
        console.log(projects[i])
        projectVis(projects[i])
        todoVis()
    }
}
export{display}





//function to create project visual
function projectVis(){
    clearProjects()
    for(let i =0; i<projects.length; i++){
        let display = document.createElement('div')
        let todobutton = document.createElement('button')
        todobutton.innerHTML = 'Add todo'
        todobutton.addEventListener('click',()=>{
            let title = prompt("Title?")
            let desc = prompt("Description?")
            let date = prompt("date")
            let priority = prompt ("priority")
            let todo = makeToDo(title,desc, date, priority )
            projects[i].thing.push(todo)
            let check = projects[i].thing
            console.log(check)

        })
        
        todobutton.setAttribute = ('id', 'todobutton')
        display.setAttribute('id', 'project')
        let bottomright = document.getElementById('bottomright')
        bottomright.append(display)
        display.append(todobutton)
}}





let testing = (function subtodo(){
     const getData = document.getElementById('subtodo')
     let name = document.getElementById('name')
     let desc = document.getElementById('desc')
     let date = document.getElementById('date')
     let prio = document.getElementById('prio')
     getData.addEventListener('click',()=>{

        const thistodo = makeToDo(name.value, desc.value, date.value, prio.value )
        projects.push(thistodo)
        display()
    
     })
})()
export{testing}




function clearProjects(){
    let bottomright = document.getElementById('bottomright')
    bottomright.innerHTML = ''
}

// Need a factory function for toDo

// Need a function that takes Todo's and then assigns them to a project?

//So there will be a make new to-do button, a make new project button, and thena  functon that 
//organizes the 