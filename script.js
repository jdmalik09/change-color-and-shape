let colorButton = document.getElementById("change-color");
let circle = document.getElementsByClassName("outer-circle")[0];
let changeShapeButton = document.getElementById("change-shape");
let shape = document.getElementById("square");
let bg = document.getElementsByClassName("bg");
colorButton.addEventListener("click", generateAllColors);
colorButton.addEventListener("click", generateBgColor);



function generateBgColor(){
    let hex = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    bg[0].style.backgroundColor = hex;  
}

function generateAllColors() {
    let hex = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    circle.style.backgroundColor = hex;
}

let shapes = ["square", "round", "diamond", "triangle", "arrow", "frame", "star", "cross", "left-point", "right-point", "parallal", "cheg"];

function randomShape() {
    let idx = Math.floor(Math.random() * shapes.length);
    return shapes[idx];
}

function generateShapes() {
    let idName = randomShape();
    shape.id = idName;
}

changeShapeButton.addEventListener("click", generateShapes);