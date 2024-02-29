// an array to hold the projects

let projects = []

let projectbutton = (function makeproj(){
    const getProject = document.getElementById('makeproject')
    getProject.addEventListener('click',()=>{
        let pName = prompt("What is your project name")
        let currentp = makeProject(pName)
       projects.push(currentp)
       display()
   
    })
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

    }

}
export{display}



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
// Need a factory function for toDo

// Need a function that takes Todo's and then assigns them to a project?

//So there will be a make new to-do button, a make new project button, and thena  functon that 
//organizes the 