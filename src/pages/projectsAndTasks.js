import add from '../assets/images/add.svg';
import list from '../assets/images/list.svg';
import close from '../assets/images/close.svg';
import { createImg, createText, createButton, createInput } from './builders';
import { buttonClicked } from './ui';
import { showInbox } from './mainSection';

export let projectsList = new Map;
projectsList.set("Inbox",[]);
export let localStorageExists;

document.addEventListener("DOMContentLoaded", function() {
    checkLocalStorage();
  });


function checkLocalStorage(){
    if (storageAvailable("localStorage")) {
        checkForProjectList();
        localStorageExists = true;
        showInbox();
      } else {
        projectsList.set("Inbox",[]);
    }
}


function storageAvailable(type) {
    let storage;
    try {
      storage = window[type];
      const x = "__storage_test__";
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch (e) {
      return (
        e instanceof DOMException &&
        // everything except Firefox
        (e.code === 22 ||
          // Firefox
          e.code === 1014 ||
          // test name field too, because code might not be present
          // everything except Firefox
          e.name === "QuotaExceededError" ||
          // Firefox
          e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
        // acknowledge QuotaExceededError only if there's something already stored
        storage &&
        storage.length !== 0
      );
    }
}
  
function checkForProjectList(){
    const localStorageProjectList = localStorage.getItem("projectsList");
    if (localStorageProjectList != null || localStorageProjectList != undefined){
        projectsList = new Map(JSON.parse(localStorageProjectList));
        for (const key of projectsList.keys()){
            if (key == "Inbox"){
                continue;
            }
            createProjectButton(key);
        }
        return;
    }
    pushToLocalStorage();
}

export function addProjectButon(div){
    const button = document.createElement('button');
    button.className = "projectButton";
    button.id = "createProjectButton";
    button.addEventListener('click', function(){addNewProject(div, "project")})
    div.appendChild(button);

    button.appendChild(createImg(null, "sidenavImage", add));
    button.appendChild(createText("p", null, "sidenavText", "Add Project"));

}

export function addNewProject(createProjectDiv, type){
    try{
        createProjectDiv.removeChild(createProjectDiv.lastChild);
    }
    catch(e){
        console.log("Error in addNewProject \n" + e);
    }
    finally{
        addInput(createProjectDiv, type)
    }
}

function addInput(div, type, project = null){
    const container = document.createElement('container');
    container.id = "inputContainer";
    div.appendChild(container);

    const input = document.createElement('input');
    if (type == "project"){
        input.id = "createProjectInput";
        input.placeholder = "Project name";
    }
    if (type == "task"){
        input.id = "createTaskInput";
        input.placeholder = "Task name";
    }
    container.appendChild(input);

    const divButtons = document.createElement('div');
    divButtons.id = "createProjectDivButtons";
    container.appendChild(divButtons);
    
    const buttonAdd = createButton("projectAdd", "addCancelButton", "Add");
    buttonAdd.addEventListener("click", function(){
        if (type == "project"){
            addProject();
        }
        if (type == "task"){
            addTask(project, container);
        }
    });
    divButtons.appendChild(buttonAdd);

    const buttonCancel = createButton("projectCancel", "addCancelButton", "Cancel",);
    buttonCancel.addEventListener("click", function(){
        if (type == "project"){
            removeProjectInput();
        }
        if (type == "task"){
            removeTaskInput(container);
        }
    });
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
    if (localStorageExists){
        pushToLocalStorage();
    }
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
    if (localStorageExists){
        pushToLocalStorage();
    }
    button.remove();
}

function addTask(project, container){
    const taskInput = document.getElementById("createTaskInput");
    const taskName = taskInput.value;
    if (project == null){
        project = "Inbox";
    }
    if (taskName == ""){
        taskInput.placeholder = "Can't be empty";
        return;
    }
    else if (projectsList.has(project)){
        const projectValues = [...projectsList.get(project).values()];
        if (projectValues.includes(taskName)){
            taskInput.value = "";
            taskInput.placeholder = "This task already exists";
            return;
        }
    }
    projectsList.set(project, projectsList.get(project).concat(taskName));
    if (localStorageExists){
        pushToLocalStorage();
    }
    removeTaskInput(container);
}

function removeTaskInput(container){
    showInbox();
    container.remove();
}


export function createTaskButton(taskName, projectName){
    const button = createButton("taskButton"+ taskName, "taskButton");

    // button.appendChild(createImg(null, "sidenavImage", list));
    const checkButton = createButton(null, "checkButton");

    const text = createText("p", null, "sidenavText", taskName);
    checkButton.addEventListener("click", function(){
        checkButton.classList.toggle("checkButtonActive");
        text.classList.toggle("checkButtonActiveText");
    })

    button.appendChild(checkButton);
    button.appendChild(text);
    button.addEventListener("click", function(){
        return;
    })

    const closeButton = createButton(null,"closeButton",null);
    closeButton.addEventListener("click", function(){
        deleteTask(taskName, button, projectName);
        return;
    })

    const containerForInputs = document.createElement('container');
    containerForInputs.className = "containerForInputs";
    button.appendChild(containerForInputs);

    const colorInput = createInput(null, "colorInput", "color");
    colorInput.addEventListener("input", function(){
        text.style.backgroundColor = colorInput.value;
    })
    containerForInputs.appendChild(colorInput);
    const dateInput = createInput(null, "dateInput", "date");
    containerForInputs.appendChild(dateInput);

    const img = createImg(null, "sidenavImage", close);
    img.classList.add("closeButtonImg");
    closeButton.appendChild(img);

    containerForInputs.appendChild(closeButton);

    const container = document.getElementById("taskContainer");
    container.insertBefore(button, container.lastChild);
    return;
}

function changeTaskColor(colorPicked ,background){
    console.log(colorPicked);
    return background.style.backgroundColor = colorPicked.value;

}

function deleteTask(taskName, button, projectName){
    let project = projectsList.get(projectName.toString());
    project.forEach((element, index) => {
        if (element === taskName){
            try{
                project.splice(index, 1);
                projectsList.set(projectName, project);
                console.log(projectsList);
                return;
            }
            catch(e){
                console.log("Can't delete task: \n" + e);
            }

        }
    });
    if (localStorageExists){
        pushToLocalStorage();
    }
    button.remove();
    
}


function pushToLocalStorage(){
    try{
        const mapString = JSON.stringify(Array.from(projectsList.entries()));
        localStorage.setItem("projectsList", mapString);
    }
    catch(e){
        console.log("Error with writing info to localStorage \n" + e);
    }
}

