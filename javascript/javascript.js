let pageblanche = document.querySelector('#PageBlanche');
let listCouleur = document.querySelector('ul');
let BtnReset = document.querySelector('#Reset');
let mouseDownActive = false;
let x = 0;  
let y = 0;
let colorRdm = document.querySelector('#colorAdd')
let inputColor = document.querySelector('#palette');
let size = 5;
let radius = 0;
let BtnTaillePinceau = document.querySelectorAll('.TaillePinceau');
BtnReset.addEventListener('click', Reset);
pageblanche.addEventListener('click', clickerSouris);
// inputColor.addEventListener('click', ajoutPalette)


function clickerSouris(){ 
    pageblanche.addEventListener('mousemove', (event) =>{
         if(mouseDownActive === true){
        x = event.clientX ;
        y = event.clientY ;
        Paint()}
         });
    pageblanche.addEventListener('mousedown', () => {
    mouseDownActive = true});
    pageblanche.addEventListener('mouseup', () => {
    mouseDownActive = false});
}



  BtnTaillePinceau.forEach(TaillePinceau => addListenerForEachButton(TaillePinceau));
function addListenerForEachButton(TaillePinceau) {
  TaillePinceau.addEventListener('click', () => PinceauTaille(TaillePinceau));
}
function PinceauTaille(TaillePinceau){
    if(TaillePinceau.classList.contains('rond')){
        radius = 50;
    }
    if(TaillePinceau.classList.contains('carre')){
        radius = 0;
    }
    if(TaillePinceau.classList.contains('plus')){
    size = size+5;
    }else if(TaillePinceau.classList.contains('moins')){
    size= size-5;
    }
    if(size < 0 ){
        size = 0;
    }
    return size
}


// function ajoutPalette(){ 
//     listCouleur.innerHTML += `<li style="backgound-color:${inputColor.value}"></li>`;
// }


function Paint(){ 
if(mouseDownActive = true){
    pageblanche.innerHTML += `<div class="px1" style="left:${x-(size/2)}px ; top:${y-(size/2)}px ; background-color: ${inputColor.value} ; height:${size}px ; width: ${size}px ; border-radius: ${radius}px"></div>`;
    }
}

    
function Reset(){
    pageblanche.innerHTML = '';
}

