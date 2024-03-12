// global variables
const  projects = []

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
// IIFE for containing adding logic to the make project button
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
            displaytodo(thisproject.name)
        })
}
}

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

function displaytodo(projectname){
    bottomright.innerHTML =projectname

}