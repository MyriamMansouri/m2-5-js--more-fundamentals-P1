// Exercise 3-3
// ----------

// NO MODIFICATIONS OUTSIDE OF THE EXERCISE FOLDER (i.e. the css is read-only)

// HINT:
// to remove the 'jitters' class, check the length of the classList.

let btns = document.querySelector(".buttons");
let defaultColor = "gold" 
let btnArr = [];

let resetBtn = document.querySelector(`#reset`);

for (let i = 0 ; i < 4 ; i++ ) {
    let btn = document.querySelector(`#btn-${i+1}`);
    btnArr.push(btn);
}

const resetStyle = () => {
    for (let i = 0 ; i < 4 ; i++ ) {
        let btn = btnArr[i];
        btn.style.backgroundColor = defaultColor;
        btn.style.opacity = 100;
        btn.classList.remove('jitters')
    }
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
        case 'reset' :
            resetStyle();
        default:
            break;
    }
}

resetStyle();

btns.addEventListener("click", styleButtons)
