// Exercise 3-2
// ------------

// NO MODIFICATIONS OUTSIDE OF THE EXERCISE FOLDER (i.e. the css is read-only)

// Hint:
// create a toggleColor function
// Because we are now going to work with the opacity and background of the buttons,
// they need to be set here. So that they are referenceable via the the style attribute.
// initialize the background color for all of the buttons in here. (for loop)

let btn = document.querySelector(".buttons");
let defaultColor = "gold" 

for (let i = 0 ; i < 4 ; i++ ) {
    let btn = document.querySelector(`#btn-${i+1}`);
    btn.style.backgroundColor = defaultColor;
    btn.style.opacity = 100;
}

const toggleColor = (btn, color) => {
    let backgroundColor = btn.style.backgroundColor;
    btn.style.backgroundColor = backgroundColor === defaultColor ? color : defaultColor;
}

const toggleOpacity = (btn, opacityRate) => {
    let opacity = btn.style.opacity;
    btn.style.opacity = opacity === '0' ? opacityRate : '0';
}

const styleButtons = (e) => {
    const currenBtn = e.target;

    switch (e.target.id) {
        case 'btn-1' :
            toggleOpacity(currenBtn, '100');
            break;
        case 'btn-2' :
            toggleColor(currenBtn, 'crimson');
            break;
        case 'btn-3' :
            toggleColor(currenBtn, 'lightblue');
            break;
        case 'btn-4' :
            currenBtn.classList.toggle("jitters") ;
            break;
        default:
            break;
    }
}

btn.addEventListener("click", styleButtons)