import { todos } from "./events";
import { makeToDo } from "./project";
import { projects } from "./events";
import { showTodos } from "./project";
import { format, compareAsc } from "date-fns";

let form = document.getElementById("forms");
let checkboxfield = document.getElementById("checkboxfield");
let submission = document.getElementById("subtodo");
let cancel = document.getElementById("canceltodo");

//makes the project selection for each todo
export function makecheckbox() {
	checkboxfield.innerHTML = "";
	for (let i = 0; i < projects.length; i++) {
		let label = document.createElement("label");
		label.htmlFor = "testing";
		Object.assign(label, {
			innerHTML: projects[i].name,
			id: "labeltesting",
		});
		let inputfield = document.createElement("div");
		inputfield.setAttribute("class", "checkfield");
		let test = document.createElement("input");
		Object.assign(test, {
			type: "radio",
			id: projects[i].name,
			name: "project",
			value: projects[i].name,
		});
		inputfield.append(test, label);
		checkboxfield.append(inputfield);
	}
}

//adds functionality to cancel, clears all values
cancel.addEventListener("click", (e) => {
	e.preventDefault();
	let name = document.getElementById("labelname");
	let description = document.getElementById("description");
	let date = document.getElementById("date");
	let low = document.getElementById("low");
	let med = document.getElementById("med");
	let high = document.getElementById("high");
	let projectcheck = document.getElementById("checkers");
	projectcheck.value = "";
	low.checked = false;
	med.checked = false;
	high.checked = false;
	checkers.value = "";
	date.value = "";
	name.value = " ";
	description.value = "";
	let form = document.getElementById("forms");
	form.style.display = "none";
	return;
});
submission.addEventListener("click", (e) => {
	e.preventDefault();
	clearForm();

	form.style.display = "none";
});

//makes a todo object, adds it to the current project and then clears the form
function clearForm() {
	let labelname = document.getElementById("labelname");
	//if statement throws an alert if the form isn't filled out

	if (
		!document.querySelector(
			'input[name="priority"]:checked' ||
				!document.querySelector('input[name="project"]:checked').value ||
				!document.getElementById("description").value
		) ||
		!document.getElementById("date").value
	) {
		alert("Please fill out the form ");
	}

	let priority = document.querySelector('input[name="priority"]:checked').value;
	let projectname = document.querySelector(
		'input[name="project"]:checked'
	).value;
	let descriptionname = document.getElementById("description").value;
	let datevalue = document.getElementById("date").value;
	let duedate = format(new Date(datevalue), "MM/dd/yyyy");
	let donevalue = "false";

	let ntodo = new makeToDo(
		labelname.value,
		projectname,
		priority,
		descriptionname,
		duedate,
		donevalue
	);
	todos.push(ntodo);
	console.log(JSON.stringify(todos));
	localStorage.setItem("todolist", JSON.stringify(todos));

	showTodos(projectname);
	console.log(todos.length);
	description.value = " ";
	labelname.value = " ";
	date.value = "";
}
export { clearForm };

//brings up the form for adding a todo.  Currently has the right project
function bringupForm() {
	let form = document.getElementById("forms");
	form.style.display = "flex";
}

export { bringupForm };
