import {createSidenav} from './pages/ui';

try{
    createUI();
}
catch(e){
    throw "Problem w wygenerowaniu UI w createUI(); \n" + e.message;
}

function createUI(){
    document.body.appendChild(createSidenav());
}