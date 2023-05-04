export function createDiv(type, id = null, className = null){
    const div = document.createElement(type);

    if (id !== null) {
        div.id = id;
    }
    if (className !== null){
        if (className == Array){
            addClassNamesToObject(div);
            return;
        }
        div.className = className;
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
        if (className == Array){
            addClassNamesToObject(text);
            return;
        }
        text.className = className;
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
        if (className == Array){
            addClassNamesToObject(img);
            return;
        }
        img.className = className;
    }
    return img;
}

export function createButton(id = null, className = null, buttonText = null){
    const button = document.createElement('button');
    if (id !== null){
        button.id = id;
    }
    if (className !== null){
        if (className == Array){
            addClassNamesToObject(button);
            return;
        }
        button.className = className;
    }
    if (buttonText !== null){
        button.textContent = buttonText;
    }
    return button;
}


export function createInput(id = null, className = null, typeOfInput = null){
    const input = document.createElement('input');
    if (id !== null){
        input.id = id;
    }
    if (className !== null){
        if (className == Array){
            addClassNamesToObject(input);
            return;
        }
        input.className = className;
    }
    if (typeOfInput !== null){
        input.type = typeOfInput;
    }
    return input;
}


function addClassNamesToObject(object){
    object.forEach(element => {
        object.classList.add(element);
    });
    return object;
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