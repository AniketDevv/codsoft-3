const display = document.getElementById("dis");
function page(){
}
function input(i){
    display.value+=i;
}
function doublezero(){
    display.value+=0;
    display.value+=0;
}
function pi(){
    display.value+=22/7;
}
function back(){
    display.value=display.value.slice(0,-1);
}
function allclear(){
    display.value="";
}
function calculate(){
    try{
        display.value=eval(display.value);
    }
    catch(Error){
        display.value="Error";
    }
}