import '../styles/ui.css';
import imgInbox from '../assets/images/inbox.svg';
import imgToday from '../assets/images/today.svg';
import imgWeek from '../assets/images/week.svg';
import { createDiv, createText, createImg, createButton, createInput, createSidenavButtons } from "./builders";


export function createUI(){
    try{
        createSidenav();
    }
    catch(e){
        console.log("Problem with creating sidenav\n" + e);
    }
    createRightSection();
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
    const projectsContainer = createDiv("container", "projectsContainer")

    return projectsContainer;
}

function createRightSection(){
    const container = createDiv("container", "rightContainer");
    const header = createHeader();
    const mainSection = createMain();
    // container.appendChild(header);
    // container.appendChild(mainSection);

    return container;
}

function createHeader(){
    return;
}

function createMain(){
    return;
}