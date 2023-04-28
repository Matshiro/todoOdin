import add from '../assets/images/add.svg';
import list from '../assets/images/list.svg';
import { createImg, createText } from './builders';

const projectsList = [];

export function addProjectButon(div){
    const button = document.createElement('button');
    button.className = "projectButton";
    button.id = "createProjectButton";
    button.addEventListener('click', function(){addNewProject(div)})
    div.appendChild(button);

    button.appendChild(createImg("sidenavImage", add));
    button.appendChild(createText("p", null, "sidenavText", "Add Project"));

}

export function addNewProject(createProjectDiv){
    try{
        createProjectDiv.removeChild(createProjectDiv.firstChild);
    }
    catch(e){
        console.log("Error in addNewProject \n" + e);
    }
    finally{
        addProjectInput(createProjectDiv)
    }

}


function addProjectInput(div){
    const container = document.createElement('container');
    container.id = "inputContainer";
    div.appendChild(container);

    const input = document.createElement('input');
    input.id = "createProjectInput";
    input.placeholder = "Project name";
    container.appendChild(input);

    const divButtons = document.createElement('div');
    divButtons.id = "createProjectDivButtons";
    container.appendChild(divButtons);
    
    divButtons.appendChild(createButton("projectAdd"));
    divButtons.appendChild(createButton("projectCancel"));

    return input;
}

function createButton(type){
    const button = document.createElement('button');
    button.className = "addCancelButton";
    button.id = type;
    if (type === "projectAdd"){
        button.textContent = "Add";
        button.addEventListener('click', function(){
            addProject();
        })
        
    }
    if (type === "projectCancel"){
        button.textContent = "Cancel";
        button.addEventListener('click', function(){
            removeProjectInput();
        })
    }

    return button;
}

function addProject(){
    const projectName = document.getElementById("createProjectInput").value;
    createProjectButton(projectName);
    projectsList.push(projectName);
    removeProjectInput();
}

function removeProjectInput(){
    addProjectButon(document.getElementById("createProjectDiv"));
    createProjectDiv.removeChild(createProjectDiv.firstChild);
}

function createProjectButton(name){
    const button = document.createElement('button');
    button.id = "projectButton" + projectsList.length;
    button.className = "projectButton";

    button.appendChild(createImg("sidenavImage", list));
    button.appendChild(createText("p", null, "sidenavText", name));

    const projectsContainer = document.getElementById("projectsContainer");
    projectsContainer.insertBefore(button, projectsContainer.lastChild);

}


