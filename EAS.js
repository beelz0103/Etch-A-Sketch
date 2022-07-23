const canvas = document.querySelector('#canvas');
let color = "Black";
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

    getColor(color);
}

function changeGrid() { 
    let slider = document.querySelector("#slider").value;   
    document.querySelector("#sliderdisplay").textContent = `${slider} x ${slider}`;
    createCanvas(slider);
}


function getColor(color) {

    if (color == "Black") {

        let boxes = document.querySelectorAll(".boxes");
        boxes.forEach((box)=>{
            box.addEventListener("mouseover", ()=>{
                box.style.backgroundColor = 'rgba(0,0,0)';
            })
        })
    }

    else if (color == "Erase") {
        let boxes = document.querySelectorAll(".boxes");
        boxes.forEach((box)=>{
            box.addEventListener("mouseover", ()=>{
                box.style.backgroundColor = 'rgba(255,255,255)';
            })
        })
    }

    else if (color == "Reset") {
        
        let boxes = document.querySelectorAll(".boxes");
        boxes.forEach((box)=>{
            box.style.backgroundColor = 'rgba(255,255,255)';            
        })
    }

}

function changeColor(e) {
    color = e.target.textContent;
    getColor(color);
}

document.querySelector("#brown").addEventListener("click", changeColor)

document.querySelector("#erase").addEventListener("click", changeColor)

document.querySelector("#reset").addEventListener("click", changeColor)


