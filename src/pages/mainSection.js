import { createImg, createText, createButton } from './builders';
import add from "../assets/images/add.svg";
import { projectsList } from "./projects";



export function showInbox(){
    const taskContainer = document.getElementById("taskContainer");
    taskContainer.appendChild(buttonAddTask("Inbox"));
}

function showToday(){

}

function showThisWeek(){

}

function showProject(projectName){

}

function clearSection(){

}

function buttonAddTask(projectName){
    const button = createButton(projectName, "taskButton");
    button.appendChild(createImg(null, "sidenavImage", add));
    button.appendChild(createText("p", null, "sidenavText", "Add Task"));

    return button;
}