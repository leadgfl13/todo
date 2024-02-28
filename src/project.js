
// object to make to-do's
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

function createToDo(){
    let tdForm = document.createElement('form')
    label
}

let addtoDO  =document.getElementById('add')

addtoDO.addEventListener('click',()=>{
    alert("Hello")
})

// Need a factory function for toDo

// Need a function that takes Todo's and then assigns them to a project?

//So there will be a make new to-do button, a make new project button, and thena  functon that 
//organizes the 