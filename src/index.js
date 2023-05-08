import { testFunction } from "./pages/projectsAndTasks";
import { addPTToPTList, createUI } from "./pages/ui";

export let listOfProjectMaps = new Map;
let listOfTasksMap = new Map;
export let localStorageExists = false;


createUI();

document.addEventListener("DOMContentLoaded", function() {
    checkLocalStorage();
  });


function checkLocalStorage(){
    if (storageAvailable("localStorage")) {
        checkForProjectList();
        localStorageExists = true;
      } else {
        listOfProjectMaps.set("Inbox", listOfTasksMap);
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
    } 
    catch (e) {
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
    const localStorageProjectList = localStorage.getItem("listOfProjectMaps");
    listOfProjectMaps = new Map(JSON.parse(localStorageProjectList));
    const projectContainer = document.getElementById("projectsContainer");
    const inboxTaskContainer = document.getElementById("mainContainer");
   
    if (listOfProjectMaps.size === 0){
      listOfProjectMaps.set("Inbox", listOfTasksMap);
      return;
    }
    for (let key of listOfProjectMaps.keys()){
        try{
            const localProject = localStorage.getItem(key.toString());
            listOfTasksMap = new Map(JSON.parse(localProject));
            listOfProjectMaps.set(key, listOfTasksMap);
            if (key === "Inbox"){
              continue;
            }
            addPTToPTList(key, projectContainer, false);
        }
        catch(e){
            console.log("Error while getting listOfProjectMaps from localStorage\n" + e);
        }
        finally{
            continue;
        }
    }
    for (let key of listOfProjectMaps.get("Inbox").keys()){
              const keyValue = listOfProjectMaps.get("Inbox").get(key)
        const taskColor = keyValue[0];
        const taskDate = keyValue[1];
        console.log(taskDate);
        addPTToPTList(key, inboxTaskContainer, true, taskColor, taskDate);
      try{

      }
      catch(e){
        console.log("Error while generating tasks to Inbox \n" + e)
      }
    }
    return;
}