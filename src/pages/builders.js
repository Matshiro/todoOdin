import { buttonPTClicked } from "./projectsAndTasks";

export function createDiv(type, id = null, className = null){
    const div = document.createElement(type);

    if (id !== null) {
        div.id = id;
    }
    if (className !== null){
        if (Array.isArray(className)){
            addClassNamesToObject(div, className);
        }
        else{
            div.className = className;
        }
    }
    return div;
}

export function createText(type, id = null, className = null, textValue = null){
    const text = document.createElement(type);
    text.textContent = textValue;

    if (id !== null){
        text.id = id;
    }
    if (className !== null){
        if (Array.isArray(className)){
            addClassNamesToObject(text, className);
        }
        else{
            text.className = className;
        }
    }
    return text;
}

export function createImg(src, id = null, className = null){
    const img = document.createElement('img');
    img.src = src;

    if (id != null){
        img.id = id;
    }
    if (className !== null){
        if (Array.isArray(className)){
            addClassNamesToObject(img, className);
        }
        else{
            img.className = className;
        }
    }
    return img;
}

export function createButton(id = null, className = null, buttonText = null){
    const button = document.createElement('button');
    if (id !== null){
        button.id = id;
    }
    if (className !== null){
        if (Array.isArray(className)){
            addClassNamesToObject(button, className);
        }
        else{
            button.className = className;
        }

    }
    if (buttonText !== null){
        button.textContent = buttonText;
    }
    return button;
}


export function createInput(id = null, className = null, typeOfInput = null, placeholder = null, focus = null){
    const input = document.createElement('input');
    if (id !== null){
        input.id = id;
    }
    if (className !== null){
        if (Array.isArray(className)){
            addClassNamesToObject(input, className);
        }
        else{
            input.className = className;
        }
    }
    if (typeOfInput !== null){
        input.type = typeOfInput;
    }
    if (typeOfInput !== null){
        input.placeholder = placeholder;
    }
    if (focus !== null && focus == true){
        input.focus();
    }
    return input;
}


function addClassNamesToObject(object,className){
    className.forEach(element => {
        object.classList.add(element);
    });
    return;
}

export function createSidenavButtons(name, img){
    const button = createButton(null, "sidenavButton");
    const buttonImg = createImg(img, null, "sidenavButtonImg");
    const buttonText = createText("p", null, "sidenavButtonText", name);
    button.appendChild(buttonImg);
    button.appendChild(buttonText);
    button.addEventListener("click", function(){
        sidenavButtonFocus(button);
    })
    if (name === "Inbox"){
        button.classList.add("buttonFocus");
    }
    return button;
}

function sidenavButtonFocus(name){
    const buttonFocus = document.querySelector(".buttonFocus");
    if (!buttonFocus){
        name.classList.add("buttonFocus");
        return;
    }
    buttonFocus.classList.remove("buttonFocus");
    name.classList.add("buttonFocus");
}

export function createPTButton(type, img, container){
    const button = createButton(type + "Button", "pTButton");
    const buttonImg = createImg(img, null, "sidenavButtonImg");
    const buttonText = createText("p", null, "sidenavButtonText", "Add "+ type);

    button.appendChild(buttonImg);
    button.appendChild(buttonText)
    button.addEventListener("click", function(){
    buttonPTClicked(type, button, container)
    });

    return button;
}