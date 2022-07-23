const canvas = document.querySelector('#canvas');
let brushColor = "#000000";
createCanvas(16); 

function createCanvas(gridSize) {
    canvas.textContent="";
    let a = gridSize;
    for (i = 0; i < gridSize*gridSize; i++) {       
        const div = document.createElement('div');
        div.setAttribute(`style`, `height: ${500/a}px; width: ${500/a}px`);
        div.classList.add('boxes');
        canvas.appendChild(div);
    }

    getColor(brushColor);
}

function changeGrid() { 
    let slider = document.querySelector("#slider").value;   
    document.querySelector("#sliderdisplay").textContent = `${slider} x ${slider}`;
    createCanvas(slider);
}


function getColor(color) {

    if (color == "#000000") {
        let boxes = document.querySelectorAll(".boxes");
        boxes.forEach((box)=>{
            box.addEventListener("mouseover", ()=>{
                box.style.backgroundColor = color;
            })
        })
    }

    else if (color == "#ffffff") {
        let boxes = document.querySelectorAll(".boxes");
        boxes.forEach((box)=>{
            box.addEventListener("mouseover", ()=>{
                box.style.backgroundColor = color;
            })
        })
    }

    else if (color == "Manual") {
        let boxes = document.querySelectorAll(".boxes");
        boxes.forEach((box)=>{
            box.addEventListener("mouseover", ()=>{
                box.style.backgroundColor = `${colorMan}`;
            })
        })
    }


}

function changeColor(e) {
    switch (e.target.id) {
        case "brown": {
            brushColor = "#000000";
            getColor(brushColor);
            break;
        }

        case "erase": {
            brushColor = "#ffffff";
            getColor(brushColor);
            break;
        }

    }

    brushColor = e.target.textContent;
    getColor(brushColor);
}

document.querySelector("#brown").addEventListener("click", changeColor)

document.querySelector("#erase").addEventListener("click", changeColor)

document.querySelector("#reset").addEventListener("click", reset)

function reset() {  
    let boxes = document.querySelectorAll(".boxes");
    boxes.forEach((box)=>{
        box.style.backgroundColor = 'rgba(255,255,255)';            
    })
}



let colorManual;
let colorMan;

window.addEventListener("load", startup, false);

function startup() {
    colorManual = document.querySelector("#color");
    colorManual.addEventListener("input", updateFirst, false);
    colorManual.select();
}

function updateFirst(event) {
    colorMan = event.target.value;
    console.log(colorMan);
    getColor("Manual");
}
