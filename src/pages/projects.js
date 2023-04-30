import add from '../assets/images/add.svg';
import list from '../assets/images/list.svg';
import close from '../assets/images/close.svg';
import { createImg, createText, createButton } from './builders';
import { buttonClicked } from './ui';

export const projectsList = new Map;
projectsList.set("Inbox",[]);

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
    
    const buttonAdd = createButton("projectAdd", "addCancelButton", "Add");
    buttonAdd.addEventListener("click", function(){
        addProject();
    })
    divButtons.appendChild(buttonAdd);

    const buttonCancel = createButton("projectCancel", "addCancelButton", "Cancel",);
    buttonCancel.addEventListener("click", function(){
        removeProjectInput();
    })
    divButtons.appendChild(buttonCancel);

    input.focus();
    return input;
}

function addProject(){
    const projectName = document.getElementById("createProjectInput");
    const tasksInProject = [];
    if (projectName.value == ""){
        projectName.placeholder = "Can't be empty";
        return;
    }
    if (projectsList.has(projectName.value)){
        projectName.value = "";
        projectName.placeholder = "Name exists";
        return;
    }
    createProjectButton(projectName.value);
    projectsList.set(projectName.value, []);
    removeProjectInput();
}

function removeProjectInput(){
    addProjectButon(document.getElementById("createProjectDiv"));
    createProjectDiv.removeChild(createProjectDiv.firstChild);
}

function createProjectButton(name){
    const button = createButton("projectButton"+ projectsList.length, "projectButton");

    button.appendChild(createImg(null, "sidenavImage", list));
    button.appendChild(createText("p", null, "sidenavText", name));
    button.addEventListener("click", function(){
        buttonClicked(button);
    })
    const closeButton = createButton(null,"closeButton",null);
    closeButton.addEventListener("click", function(){
        deleteProject(name, button);
    })

    const img = createImg(null, "sidenavImage", close);
    img.classList.add("closeButtonImg");
    closeButton.appendChild(img);

    button.appendChild(closeButton)

    const projectsContainer = document.getElementById("projectsContainer");
    projectsContainer.insertBefore(button, projectsContainer.lastChild);

}

function deleteProject(name, button){
    projectsList.delete(name.toString());
    button.remove();
}

