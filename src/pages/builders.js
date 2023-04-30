export function createContainer(){
    console.log("a");
}

export function createText(type, id, className, textValue){
    const text = document.createElement(type);
    text.textContent = textValue;

    if (id !== null){
        text.id = id;
    }
    if (className !== null){
        text.className = className;
    }

    return text;
}

export function createImg(id = null, className, src){
    const img = document.createElement('img');
    if (id != null){
        img.id = id;
    }
    if (className != null){
        img.className = className;
    }
    if (src != null){
        img.src = src;
    }
    
    return img;
}

export function createButton(id, className, buttonText = null){
    const button = document.createElement('button');

    if (id !== null){
        button.id = id;
    }
    if (className !== null){
        button.className = className;
    }
    if (buttonText !== null){
        button.textContent = buttonText;
    }
    return button;
}