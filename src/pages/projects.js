import add from '../assets/images/add.svg';

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

export function addProjectButon(div){
    const button = document.createElement('button');
    button.className = "projectButton";
    button.id = "createProjectButton";
    button.addEventListener('click', function(){addNewProject(div)})
    div.appendChild(button);

    const img = document.createElement('img');
    img.className = "sidenavImage";
    img.src = add;
    button.appendChild(img);

    const text = document.createElement('p');
    text.className = "sidenavText";
    text.textContent = "Add Project";
    button.appendChild(text);

}


function addProjectInput(div){
    const input = document.createElement('input');
    input.id = "createProjectInput";
    div.appendChild(input);

    const divButtons = document.createElement('div');
    divButtons.id = "createProjectDivButtons";
    div.appendChild(divButtons);
    
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
        button.addEventListener('click', function(){})
        
    }
    if (type === "projectCancel"){
        button.textContent = "Cancel";
    }

    
    return button;
}