import { listOfTasksMap, listOfProjectMaps } from "..";
import { createInputForPT, addProjectToProjectList } from "./ui";
import {createPTButton} from "./builders";

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
        console.log(listOfProjectMaps);
    }
}

export function buttonPTClicked(type, parentButton, container){
    try{
        parentButton.remove();
        createInputForPT(type, container);
    }
    catch(e){
        console.log("Can't create input for " + type + "\n" + e);
    }
}

export function addProject(inputValue, parentContainer){
    listOfProjectMaps.set(inputValue, new Map);
    pushChangesToLocalStorage();
    addProjectToProjectList(inputValue, parentContainer);
    return;
}

export function addTask(){
    // Dodawanie do projektu po wyszukaniu aktualnie aktywnego buttona.
    // Albooooo
    // Zbieranie nazwy danego projektu po nazwie kontenera (będzie przecież nazwa danego projektu
    // jako h2)
}

export function removeInput(type, parentContainer, container, imgAdd){
    container.remove();
    parentContainer.appendChild(createPTButton(type, imgAdd, parentContainer));
    return;
}

export function deleteProject(button, projectName){
    button.remove();
    listOfProjectMaps.delete(projectName);
    pushChangesToLocalStorage();
    localStorage.removeItem(projectName);
}