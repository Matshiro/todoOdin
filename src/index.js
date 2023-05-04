import { testFunction } from "./pages/projectsAndTasks";
import { createUI } from "./pages/ui";

export let listOfProjectMaps = new Map;
let listOfTasksMap = new Map;
export let localStorageExists = false;

localStorage.clear();
createUI();
testFunction();

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
    for (let key of listOfProjectMaps.keys()){
        try{
            const localProject = localStorage.getItem(key.toString());
            listOfTasksMap = new Map(JSON.parse(localProject));
            listOfProjectMaps.set(key, listOfTasksMap);
        }
        catch(e){
            console.log("Error while getting listOfProjectMaps from localStorage" + e);
        }
        finally{
            continue;
        }
    }
    return;
}