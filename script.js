//gets grid element
const gridContainer = document.getElementById("canvas");
const buttons = document.querySelectorAll(".size_button");
const color = document.getElementById("color_choice");

//defines draw so that the color change or drawing only works if draw is set to true
let draw = false;

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
        });

        div.addEventListener('mousedown', function() {
            div.style.backgroundColor = color.value;
        });
    }

}

//event listeners so that draw works when the user clicks down on the mouse and stops working when they let go of the mouse
window.addEventListener('mousedown', function() {
    draw = true;
});

window.addEventListener('mouseup', function() {
    draw = false;
});

gridMaker(); //function call to set up default grid

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

