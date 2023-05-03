//gets grid element
const gridContainer = document.getElementById("canvas");
const buttons = document.querySelectorAll(".size_button");
const color = document.getElementById("color_choice");
const blackBtn = document.getElementById("black_btn");
const multiColorBtn = document.getElementById("multiColor_btn");
const eraseBtn = document.getElementById("eraser");
const clearBtn = document.getElementById("clear");

//defines draw so that the color change or drawing only works if draw is set to true
let draw = false;
let isBlack = false;
let isMultiColor = false;
let erase = false;

//function creates the grid
function gridMaker(size = 4) {
    gridContainer.style.setProperty('--size', size);

    for(i=0; i< size * size; i++){
        const div = document.createElement('div');
        div.classList.add('pixel');
        gridContainer.appendChild(div);       

        //event listeners so that the color changes/drawing works when the user clicks down on a div and continues to work as they mouseover the divs
        div.addEventListener('mouseover', function() {
            if (!draw) return;
            div.style.backgroundColor = color.value;
            if (isBlack == true) {
                div.style.backgroundColor = '#000';
            }
            if(isMultiColor == true) {
                div.style.backgroundColor = randomColors();
            }
            if(erase == true) {
                div.style.backgroundColor = '#fff';
            }
            
        });
        
        //need to toggle back to color.value if button is clicked a second time
        div.addEventListener('mousedown', function() {            
            div.style.backgroundColor = color.value;
            if (isBlack == true) {
                div.style.backgroundColor = '#000';
            }
            if(isMultiColor == true) {
                div.style.backgroundColor = randomColors();
            }
            if(erase == true) {
                div.style.backgroundColor = '#fff';
            }
        });
       
        
    }
    
    //black button changes pixel color to black on click
     blackBtn.addEventListener('click', function() {
        isBlack = true;  
        //need to add class to show button is down         
    });

    //multiColor button turns random colored on click
    multiColorBtn.addEventListener('click', function() {
        isMultiColor = true;
    });

    //erase button restores pixel color to white on click
    eraseBtn.addEventListener('click', function() {
        erase = true;
    })

    color.addEventListener('change', function() {
        isBlack = false;
        isMultiColor = false;
        erase = false;
    });

    color.addEventListener('click', function() {
        isBlack = false;
        isMultiColor = false;
        erase = false;
    });
}

function randomColors() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    console.log(r + ',' + g + ',' + b);

    let multiBackground = `rgb(${r}, ${g}, ${b})`; 
    console.log(multiBackground);
    return multiBackground;
}

//event listeners so that draw works when the user clicks down on the mouse and stops working when they let go of the mouse
window.addEventListener('mousedown', function() {
    draw = true;
});

window.addEventListener('mouseup', function() {
    draw = false;
});


//function that adds event listeners to the buttons so that the size of the grid changes accordingly
buttons.forEach(button => button.addEventListener('click', function() {
    // resets the grid by removing the divs that were previously appended    
    gridContainer.innerHTML = ' ';
  
    if (button.classList.contains("size4")) {        
        gridMaker(4);
    } else if (button.classList.contains("size8")) {        
        gridMaker(8);        
    } else if (button.classList.contains("size10")) {       
        gridMaker(10);
    } else if (button.classList.contains("size20")) {        
        gridMaker(20);
    } else if (button.classList.contains("size30")) {        
        gridMaker(30);
    } else if (button.classList.contains("size40")) {        
        gridMaker(40);
    }
   
}));

gridMaker(); //function call to set up default grid