import './style.css';
import {makeToDo} from "./project"
import{makeProject} from "./project"
import {testing} from "./project"
import{display} from "./project"
import{projectbutton} from "./project"



projectbutton

testing
const test = makeToDo('test','this is a test', 6/13, 22)

let testproject = makeProject('testproject')



//each project is a new array, that stores the to-dos inside them??



let layout = function(){
  
    let page = document.createElement('div')
    page.setAttribute('id','pagelayout')
    body.append(page)
}

layout()

export{layout}
