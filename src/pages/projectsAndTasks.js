import { listOfTasksMap, listOfProjectMaps } from "..";
import { createInputForPT, addPTToPTList } from "./ui";
import {createPTButton} from "./builders";

const date = new Date();
const dateString = date.toJSON();
const dateStringForInput = dateString.slice(0,10);



// export function testFunction(){
//     let listOfTasksMap = new Map;

//     for(let i = 0; i < 4; i++){
//         listOfTasksMap.set("Task"+i, ["color"+i, "date", false]);
//         listOfProjectMaps.set("Inbox", listOfTasksMap);
//     }
//     listOfTasksMap = new Map;
//     for(let j = 0; j < 4; j++){

//         listOfTasksMap.set("TaskInProject1"+j, ["color"+j, "date", true]);
//         listOfProjectMaps.set("Projekt1", listOfTasksMap);

//     }
//     pushChangesToLocalStorage()
// }

function pushChangesToLocalStorage(){
    try{
        for(let key of listOfProjectMaps.keys()){
            const listOfKeys = listOfProjectMaps.get(key).entries();
            const listOfKeysString = JSON.stringify(Array.from(listOfKeys));

            localStorage.setItem(key, listOfKeysString);
        }
        const listOfProjectMapsString = JSON.stringify(Array.from(listOfProjectMaps.entries()));
        localStorage.setItem("listOfProjectMaps", listOfProjectMapsString);
    }
    catch(e){
        console.log("Error with writing info to local storage\n" + e);
    }
    finally{
        // console.log(listOfProjectMaps);
    }
}

export function buttonPTClicked(type, parentButton, container, activeButtonName){
    try{
        parentButton.remove();
        createInputForPT(type, container, activeButtonName);
    }
    catch(e){
        console.log("Can't create input for " + type + "\n" + e);
    }
}

export function addProject(input, type, parentContainer, container, imgAdd){
    if (input.value === "" || input.value.match(/^ *$/) !== null){
        input.value = "";
        input.placeholder = "Can't be empty";
        return;
    }
    if (listOfProjectMaps.has(input.value)){
        input.value = ""
        input.placeholder = "Project exsist."
        return;
    }
    listOfProjectMaps.set(input.value, new Map);
    pushChangesToLocalStorage();
    addPTToPTList(input.value, parentContainer, false);
    removeInput(type, parentContainer, container, imgAdd);
    return;
}

export function addTask(projectName, taskInput, type, parentContainer, container, imgAdd){
    const valueMapofProjectName = listOfProjectMaps.get(projectName)

    if (taskInput.value === "" || taskInput.value.match(/^ *$/) !== null){
        taskInput.value = "";
        taskInput.placeholder = "Task must have a name.";
        return;
    }
    if (valueMapofProjectName.has(taskInput.value)){
        taskInput.value = "";
        taskInput.placeholder = "Task already exists.";
        return;
    }

    valueMapofProjectName.set(taskInput.value, ["#FFFFFF", dateStringForInput])
    listOfProjectMaps.set(projectName, valueMapofProjectName);
    pushChangesToLocalStorage();
    addPTToPTList(taskInput.value, parentContainer, true, "#FFFFFF", dateStringForInput);
    removeInput(type, parentContainer, container, imgAdd, projectName);

}

export function removeInput(type, parentContainer, container, imgAdd, activeButtonName){
    container.remove();
    parentContainer.appendChild(createPTButton(type, imgAdd, parentContainer, activeButtonName));
    return;
}

export function deleteProject(button, projectName){
    button.remove();
    listOfProjectMaps.delete(projectName);
    pushChangesToLocalStorage();
    localStorage.removeItem(projectName);
}

export function deleteTask(button, projectName, parentContainerName){
    button.remove();
    listOfProjectMaps.get(parentContainerName).delete(projectName);
    pushChangesToLocalStorage();
}

export function changeValuesOnTask(nameOfProject, nameOfTask, nameOfInput, inputValue){
    let valueOfTask = listOfProjectMaps.get(nameOfProject).get(nameOfTask);
    if (nameOfInput === "colorInput"){
        valueOfTask[0] = inputValue;
    }
    if (nameOfInput === "dateInput"){
        valueOfTask[1] = inputValue;
    }

    listOfProjectMaps.get(nameOfProject).set(nameOfTask, valueOfTask);
    pushChangesToLocalStorage();

}