import '../styles/ui.css';
import imgInbox from '../assets/images/inbox.svg';
import imgToday from '../assets/images/today.svg';
import imgWeek from '../assets/images/week.svg';
import imgAdd from '../assets/images/add.svg';
import imgClose from '../assets/images/close.svg';
import imgList from '../assets/images/list.svg';
import { createDiv, createText, createImg, createButton, createInput, createSidenavButtons, createPTButton } from "./builders";


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
    const projectAddButton = createPTButton("Project", imgAdd, projectsContainer);

    projectsContainer.appendChild(projectAddButton);

    return projectsContainer;
}



function createRightSection(){
    const container = createDiv("container", "rightContainer");
    const header = createHeader();
    const mainSection = createMain();
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

function createMain(){
    const container = createDiv("container", "mainContainer");
    const inboxText = createText("h2", "mainSectionHeader", null, "Inbox");
    const taskContainer = createDiv("container", "taskContainer");
    const taskAddButton = createPTButton("Task", imgAdd, taskContainer);

    container.appendChild(inboxText);
    container.appendChild(taskContainer);
    taskContainer.appendChild(taskAddButton);

    return container;
}

export function createInputForPT(type, parentContainer){
    const container = createDiv("container", null, "inputContainer");
    const input = createInput(`create${type}Input`, "inputBox", "text", type + " name", true);
    const buttonContainer = createDiv("div", null, "acButtonsContainer");
    const addButton = createButton(type + "Add", "acButton", "Add");
    const cancelButton = createButton(type + "Cancel", "acButton", "Cancel");

    if (type === "project"){
        addButton.addEventListener("click", function(){
            addProject();
        });

    }
    if (type === "task"){
        addButton.addEventListener("click", function(){
            addTask();
        });
    }
    cancelButton.addEventListener("click", function(){
            cancelInput();
    });
    
    container.appendChild(input);
    container.appendChild(buttonContainer);
    buttonContainer.appendChild(addButton);
    buttonContainer.appendChild(cancelButton);


    parentContainer.appendChild(container);
    input.focus();
    return;
}
