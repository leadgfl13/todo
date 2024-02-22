import './style.css';


console.log("Hello")

alert("Hello")
const project = {

    
}


class Project{
    constructor(title){
        this.title = title
    }
}


class Todo{
    constructor(title, description, dueDate, priority){
        this.title = title;
        this.description = description,
        this.dueDate = dueDate,
        this.priority = priority
    }  
}

let thing = new Todo('test', 'testing description', 'due tonight', 'high priority')

console.log(thing)

//each project is a new array, that stores the to-dos inside them??


let layout = function(){
    let page = document.createElement('div')
    page.setAttribute('id','pagelayout')
    body.append(page)
}

layout()

export{layout}
