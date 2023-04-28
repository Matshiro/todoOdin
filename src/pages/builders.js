export function createContainer(){

}

export function createText(type, classId, className, textValue){
    const text = document.createElement(type);
    text.id = classId;
    text.className = className
    text.textContent = textValue;

    if (classId === null){
        text.removeAttribute('id');
    }
    if (className === null){
        text.removeAttribute('id');
    }

    return text;
}

export function createImg(className,src){
    const img = document.createElement('img');
    img.classList = className;
    img.src = src;

    return img;
}