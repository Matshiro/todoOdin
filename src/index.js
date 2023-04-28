import {createSidenav, createRightSection} from './pages/ui';

try{
    createUI();
}
catch(e){
    throw "Problem w wygenerowaniu UI w createUI(); \n" + e.message;
}

function createUI(){
    try{
        document.body.appendChild(createSidenav());
    }
    catch(e){
        throw "Problem w wygenerowaniu sidenava \n" + e.message;
    }
    try{
        document.body.appendChild(createRightSection());
    }
    catch(e){
        throw "Problem w wygenerowaniu prawego containera \n" + e.message;
    }
    
}