// Home Div assigned to home variable for easy access and usage
let home = document.getElementById("home");

//add event listener to how to play button
let instructions = document.getElementById("instructions");
instructions.addEventListener("click", howToPlay);

let instructHome = document.getElementById("instruct-home");
instructHome.addEventListener("click", returnHome);

function howToPlay() {
    let instructs = document.getElementById("instructs");
    
    home.hidden = true;
    instructs.hidden = false;
}

function returnHome() {
    home.hidden = false;
    instructs.hidden = true;
}



