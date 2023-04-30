import add from '../assets/images/add.svg';
import list from '../assets/images/list.svg';
import { createImg, createText, createButton } from './builders';
import { buttonClicked } from './ui';

const projectsList = [];

export function addProjectButon(div){
    const button = document.createElement('button');
    button.className = "projectButton";
    button.id = "createProjectButton";
    button.addEventListener('click', function(){addNewProject(div)})
    div.appendChild(button);

    button.appendChild(createImg(null, "sidenavImage", add));
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
    
    const buttonAdd = createButton("projectAdd", "addCancelButton", "Add", null,);
    buttonAdd.addEventListener("click", function(){
        addProject();
    })
    divButtons.appendChild(buttonAdd);

    const buttonCancel = createButton("projectCancel", "addCancelButton", "Cancel", null,);
    buttonCancel.addEventListener("click", function(){
        removeProjectInput();
    })
    divButtons.appendChild(buttonCancel);

    input.focus();
    return input;
}

function createButtonUI(type){
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
    const projectName = document.getElementById("createProjectInput");
    if (projectName.value == ""){
        projectName.placeholder = "Can't be empty";
        return;
    }
    if (projectsList.includes(projectName.value)){
        projectName.value = "";
        projectName.placeholder = "Name exists";
        return;
    }
    createProjectButton(projectName.value);
    projectsList.push(projectName.value);
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

    button.appendChild(createImg(null, "sidenavImage", list));
    button.appendChild(createText("p", null, "sidenavText", name));

    const projectsContainer = document.getElementById("projectsContainer");
    projectsContainer.insertBefore(button, projectsContainer.lastChild);

}


