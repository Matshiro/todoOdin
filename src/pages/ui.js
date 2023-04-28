import '../styles/ui.css'
import inbox from '../assets/images/inbox.svg';
import today from '../assets/images/today.svg';
import week from '../assets/images/week.svg';

import { addProjectButon } from './projects';


export function createSidenav(){
    const sidenavContainer = document.createElement('sidenav');
    sidenavContainer.id = "sidenav";

    const mainContainer = document.createElement('container');
    mainContainer.id = "mainSidenavContainer";
    sidenavContainer.appendChild(mainContainer);

    mainContainer.appendChild(createSideButton("Inbox", inbox));
    mainContainer.appendChild(createSideButton("Today", today));
    mainContainer.appendChild(createSideButton("This week", week));

    const projectsText = document.createElement('div');
    projectsText.id = "sidenavProjectText";
    projectsText.textContent = "Projects";
    mainContainer.appendChild(projectsText);

    const projectsContainer = document.createElement('container');
    projectsContainer.id = "projectsContainer";
    mainContainer.appendChild(projectsContainer);

    projectsContainer.appendChild(addProjectContainer());

    return sidenavContainer;
}

function createSideButton(name, icon){
    const div = document.createElement('button');
    div.className = "sidenavButton";

    const img = document.createElement('img');
    img.className = "sidenavImage";
    img.src = icon;
    div.appendChild(img);

    const text = document.createElement('p');
    text.className = "sidenavText";
    text.textContent = name;
    div.appendChild(text);

    return div;
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
    const text = document.createElement('h1');
    text.id = "headerText";
    text.textContent = "List doTo";
    container.appendChild(text);

    return container;
}

function createMain(){
    const container = document.createElement('contaier');
    container.id = "mainContainer";


    return container;
}