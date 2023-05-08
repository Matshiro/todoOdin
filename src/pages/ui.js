import '../styles/ui.css';
import imgInbox from '../assets/images/inbox.svg';
import imgToday from '../assets/images/today.svg';
import imgWeek from '../assets/images/week.svg';
import imgAdd from '../assets/images/add.svg';
import imgClose from '../assets/images/close.svg';
import imgList from '../assets/images/list.svg';
import { createDiv, createText, createImg, createButton, createInput, createSidenavButtons, createPTButton } from "./builders";
import { removeInput, addProject, addTask, deleteProject, deleteTask } from './projectsAndTasks';

export function createUI(){
    try{
        createSidenav();
        createRightSection();
    }
    catch(e){
        console.log("Problem with creating sidenav\n" + e);
    }
    
}

function createSidenav(){
    const sidenavContainer = createDiv("sidenav", "sidenav");
    const buttonContainer = createButtonContainer();
    const projectText = createText("div", "sideNavProjectText", null, "Projects");
    const projectsContainer = createProjectsContainer();

    sidenavContainer.appendChild(buttonContainer);
    sidenavContainer.appendChild(projectText);
    sidenavContainer.appendChild(projectsContainer);

    return document.body.appendChild(sidenavContainer);
}

function createButtonContainer(){
    const buttonContainer = createDiv("container", "sidenavButtonContainer");
    const buttons = {
        Inbox: ["Inbox", imgInbox],
        Today: ["Today", imgToday],
        Week: ["This week", imgWeek]
    }
    buttonContainer.appendChild(createSidenavButtons(buttons.Inbox[0], buttons.Inbox[1]));
    buttonContainer.appendChild(createSidenavButtons(buttons.Today[0], buttons.Today[1]));
    buttonContainer.appendChild(createSidenavButtons(buttons.Week[0], buttons.Week[1]));

    return buttonContainer;
}

function createProjectsContainer(){
    const projectsContainer = createDiv("container", "projectsContainer");
    const projectAddButton = createPTButton("Project", imgAdd, projectsContainer, null);

    projectsContainer.appendChild(projectAddButton);

    return projectsContainer;
}



function createRightSection(){
    const container = createDiv("container", "rightContainer");
    const header = createHeader();
    const mainSection = createMain("Inbox");
    container.appendChild(header);
    container.appendChild(mainSection);

    return document.body.appendChild(container);
}

function createHeader(){
    const container = createDiv("container", "headerContainer");
    const logoText = createText("h1", "headerText", null, "List doTo");

    container.appendChild(logoText);

    return container;
}

function createMain(activeButtonName){
    const container = createDiv("container", "mainContainer");
    const text = createText("h2", "mainSectionHeader", null, activeButtonName);
    const taskContainer = createDiv("container", "taskContainer");
    const taskAddButton = createPTButton("Task", imgAdd, taskContainer, activeButtonName);


    container.appendChild(text);
    container.appendChild(taskContainer);
    taskContainer.appendChild(taskAddButton);

    return container;
}

export function createInputForPT(type, parentContainer, activeButtonName){
    const container = createDiv("container", null, "inputContainer");
    const input = createInput(`create${type}Input`, "inputBox", "text", type + " name", true);
    const buttonContainer = createDiv("div", null, "acButtonsContainer");
    const addButton = createButton(null, ["acButton", "addButton"], "Add");
    const cancelButton = createButton(null, ["acButton", "cancelButton"], "Cancel");

    if (type === "Project"){
        addButton.addEventListener("click", function(){
            addProject(input, type, parentContainer, container, imgAdd);

        });

    }
    if (type === "Task"){
        addButton.addEventListener("click", function(){
            addTask(activeButtonName, input, type, parentContainer, container, imgAdd);
        });
    }
    cancelButton.addEventListener("click", function(){
        removeInput(type, parentContainer, container, imgAdd, activeButtonName);
    });
    
    container.appendChild(input);
    container.appendChild(buttonContainer);
    buttonContainer.appendChild(addButton);
    buttonContainer.appendChild(cancelButton);


    parentContainer.appendChild(container);
    input.focus();
    return;
}

export function addPTToPTList(name, parentContainer, isTask){
    const button = createButton(null, "pTButton");
    const buttonImg = createImg(imgList, "Image of a list", null, "sidenavButtonImg");
    const buttonText = createText("p", null, "sidenavButtonText", name);
    const container = parentContainer;
    const closeButton = createButton(null, "closeButton");
    const closeButtonImg = createImg(imgClose, "Cross for closing", null, "sidenavButtonImg");

    closeButton.addEventListener("click", function(){
        deleteProject(button, name);
    })

    button.appendChild(buttonImg);
    button.appendChild(buttonText);
    if (isTask){
        button.classList.add("taskButton");
        const containerForInputs = createDiv("container", null, "containerForInputs");
        const colorInput = createInput(null, "colorInput", "color", "#FFF");
        const dateInput = createInput(null, "dateInput", "date");
        button.appendChild(containerForInputs);
        containerForInputs.appendChild(colorInput);
        containerForInputs.appendChild(dateInput);
    }
    closeButton.appendChild(closeButtonImg);
    button.appendChild(closeButton);


    return container.insertBefore(button, container.lastChild);
}
