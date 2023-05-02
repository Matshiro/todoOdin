import { createImg, createText, createButton } from './builders';
import add from "../assets/images/add.svg";
import { addNewProject, createTaskButton, localStorageExists, projectsList } from "./projectsAndTasks";



export function showInbox(){
    const taskContainer = document.getElementById("taskContainer");
    taskContainer.appendChild(buttonAddTask("Inbox", taskContainer));
    getTaskList("Inbox", taskContainer);
}

function showToday(){

}

function showThisWeek(){

}

function showProject(projectName){

}

function clearSection(){

}

function buttonAddTask(projectName, contaier){
    const button = createButton(projectName, "taskButton");
    button.appendChild(createImg(null, "sidenavImage", add));
    button.appendChild(createText("p", null, "sidenavText", "Add Task"));
    button.addEventListener("click", function(){
        addNewProject(contaier, "task");
    });
    return button;
}

function getTaskList(projectName, container){
        const listOfValues = [...projectsList.get(projectName).values()];
        listOfValues.forEach(element => {
            const taskButtonId = container.querySelector("#taskButton"+element);
            if (taskButtonId != undefined){
                return;
            }
            return createTaskButton(element);
            
        })
}
