// Exercise 3-1
// ------------

// NO MODIFICATIONS OUTSIDE OF THE EXERCISE FOLDER (i.e. the css is read-only)

// Guidelines
// - write only one event listener
// - use a switch statement

let btn = document.querySelector(".buttons");

const styleButtons = (e) => {
    switch (e.target.id) {
        case 'btn-1' :
            e.target.style.opacity = 0;
            break;
        case 'btn-2' :
            e.target.style.backgroundColor = 'crimson';
            break;
        case 'btn-3' :
            e.target.style.backgroundColor = 'lightblue';
            break;
        case 'btn-4' :
            e.target.classList.add("jitters") ;
            break;
    }

}

btn.addEventListener("click", styleButtons)