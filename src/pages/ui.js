import '../styles/ui.css'
import inbox from '../assets/images/inbox.svg';
import today from '../assets/images/today.svg';
import week from '../assets/images/week.svg';


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

    projectsContainer.appendChild(addProjectButton());

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

function addProjectButton(){
    const div = document.createElement('div');
    div.id = "createProjectDiv";

    const button = document.createElement('button');
    button.className = "projectButton";
    button.id = "createProjectButton";
    div.appendChild(button);

    

    return div;
}

function addProjectInput(){
    const input = document.createElement('input');
    input.id = "createProjectInput";
    div.appendChild(input);

    const divButtons = document.createElement('div');
    divButtons.id = "createProjectDivButtons";
    div.appendChild(divButtons);
    
    divButtons.appendChild(createButton("projectAdd"));
    divButtons.appendChild(createButton("projectCancel"));
}

function createButton(type){
    const button = document.createElement('button');
    button.className = "addCancelButton";
    button.id = type;
    
    return button;
}