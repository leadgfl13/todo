// class for making aproject

const projects = []

export class makeProject{
    constructor(name){
        this.name = name
        this.todolist = []
    }
     addProject(){
        projects.push(this)
     }

     addToDo(todoobject){
        this.todolist.push(todoobject)
     }

     }
     let test = new makeProject('test')

     test.addProject()


export class makeToDo{
    constructor(name){
        this.name = name
    }
}

function showProjects(){
    for(let i =0; i<projects.length; i++){
        let project =document.createElement('button')
        console.log(projects[i].name)
        project.innerHTML = projects[i].name
        bottomleft.append(project)
    }
}
export{showProjects}
   

















