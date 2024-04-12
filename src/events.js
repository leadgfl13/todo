

 let projects = []
 let todos = []

export {projects}

 export function todosview(){
    return{todos}
 }


//creates a list of current project buttons 
function showProjects(){
    console.log("projectz")
    bottomleft.innerHTML = ''
    for(let i = 0; i<projects.length; i++){
        let currentproject = projects[i]
        let project = document.createElement('button')
        project.innerHTML = currentproject.name
        bottomleft.append(project)
        project.addEventListener('click', ()=>{
            console.log("Hello I have been clicked")
            })
        }
}
export{showProjects}