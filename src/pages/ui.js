import '../styles/ui.css'
import inbox from '../assets/images/inbox.svg';
import today from '../assets/images/today.svg';
import week from '../assets/images/week.svg';
import { createImg, createText, createButton } from './builders';

import { addProjectButon } from './projectsAndTasks';

export function createSidenav(){
    const sidenavContainer = document.createElement('sidenav');
    sidenavContainer.id = "sidenav";

    const mainContainer = document.createElement('container');
    mainContainer.id = "mainSidenavContainer";
    sidenavContainer.appendChild(mainContainer);

    mainContainer.appendChild(createSideButton("Inbox", inbox));
    mainContainer.appendChild(createSideButton("Today", today));
    mainContainer.appendChild(createSideButton("This week", week));
    
    mainContainer.appendChild(createText("div", "sidenavProjectText", null, "Projects"));

    const projectsContainer = document.createElement('container');
    projectsContainer.id = "projectsContainer";
    mainContainer.appendChild(projectsContainer);

    projectsContainer.appendChild(addProjectContainer());

    return sidenavContainer;
}


function createSideButton(name, icon){

    const button = createButton(null, "sidenavButton");
    button.appendChild(createImg(null, "sidenavImage", icon));
    button.appendChild(createText("p", null, "sidenavText", name));
    button.addEventListener('click', function(){
         buttonClicked(button);
    })
    if (name === "Inbox"){
        button.classList.add("buttonClicked");
    }
    return button;

}

export function buttonClicked(button){
    const buttonClicked = document.querySelector(".buttonClicked");
    if (!buttonClicked){
        button.classList.add("buttonClicked");
        return;
    }
    buttonClicked.classList.remove("buttonClicked");
    button.classList.add("buttonClicked");
}

function addProjectContainer(){
    const div = document.createElement('div');
    div.id = "createProjectDiv";

    addProjectButon(div);

    return div;
}

export function createRightSection(){
    const container = document.createElement('container');
    container.id = "rightContainer";
    container.appendChild(createHeader());
    container.appendChild(createMain());

    return container;
}


function createHeader(){
    const container = document.createElement('container');
    container.id = "headerContainer";
    container.appendChild(createText("h1", "headerText", null, "List doTo"));

    return container;
}

function createMain(){
    const container = document.createElement('contaier');
    container.id = "mainContainer";

    container.appendChild(createText("h2", "mainSectionHeader", null, "Inbox"));

    const taskContainer = document.createElement('container');
    taskContainer.id = "taskContainer";
    container.appendChild(taskContainer);

    return container;
}

