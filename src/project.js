// global variables

const  projects = []

let projectbutton = document.getElementById('makeproject')
let bottomright = document.getElementById('bottomright')


function makeProject(name){
    const list = []

return{
    name, list
}
}

let makeprojects = (()=>{
    projectbutton.addEventListener('click',()=>{
        console.log("Hello")
        let projectname = prompt('What is your project name?')
        let newproject = makeProject(projectname)
        projects.push(newproject)
        console.log(projects.length)
        checkProjects()
    })
})()
export{makeprojects}

function checkProjects(){
    for (let i =0; i<projects.length; i++){
        let thisproject = projects[i]
        console.log(thisproject.name)
        console.log("has this many todos")
        console.log(thisproject.list.length)
    }
}