import './style.css';
import {makeToDo} from "./project"
import{makeProject} from "./project"





    
const test = makeToDo('test','this is a test', 6/13, 22)

let testproject = makeProject('testproject')

console.log("Here is the project without adding a todo")

console.log(testproject)
console.log("now I will append using the addToDo function on testproject")

testproject.addToDo('test')
console.log(testproject)

//each project is a new array, that stores the to-dos inside them??



let layout = function(){
    let body = document.getElementById('body')
    let page = document.createElement('div')
    page.setAttribute('id','pagelayout')
    body.append(page)
}

layout()

export{layout}
