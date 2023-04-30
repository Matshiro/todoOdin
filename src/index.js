import {createSidenav, createRightSection} from './pages/ui';
import { showInbox } from './pages/mainSection';


createUI();


function createUI(){
    try{
        document.body.appendChild(createSidenav());
    }
    catch(e){
        throw "Problem w wygenerowaniu sidenava \n" + e.message;
    }
    try{
        document.body.appendChild(createRightSection());
        showInbox();
    }
    catch(e){
        throw "Problem w wygenerowaniu prawego containera \n" + e.message;
    }
    
}