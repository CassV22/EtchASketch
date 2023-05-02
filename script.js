//gets grid element
const gridContainer = document.getElementById("canvas");
const buttons = document.querySelectorAll(".size_button");

//function creates the grid
function gridMaker(size = 4) {
    gridContainer.style.setProperty('--size', size);

    for(i=0; i< size * size; i++){
        const div = document.createElement('div');
        div.classList.add('pixel');
        gridContainer.appendChild(div);
    }

}

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