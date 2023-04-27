import {createSidenav} from './pages/ui';

try{
    createUI();
}
catch{
    throw "Problem w wygenerowaniu UI w createUI();"
}

function createUI(){
    document.body.appendChild(createSidenav());
}