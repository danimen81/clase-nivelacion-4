let maxclick = 100;
const button_start = document.getElementById('button_start');
 function next(){
    location.href="ejercicio1.html"
 }

function CountClicks(){
    if(maxclick > 0) 
        maxclick--,
        helpMe();
    else 
        showImage();
}

function helpMe(){
    try {
        const instructions = 'Crea un elemento <img> con esta direccion relativa ../img/haciaejercicio1.png';
        console.log(instructions);
    } catch (error) {
        console.log('help!!! home.js');
    }
}

const showImage = () =>{
    const image_container = document.getElementsByClassName('container-img');
    if(image_container.style.display == "none") 
    image_container.style.display = "block";
}