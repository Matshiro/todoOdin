import { listOfTasksMap, listOfProjectMaps } from "..";
import { createInputForPT } from "./ui";

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

export function addProject(){
    return;
}

export function cancelInput(){
    return;
}