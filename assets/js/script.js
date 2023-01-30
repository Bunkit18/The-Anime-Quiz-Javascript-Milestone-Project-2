// Home Div assigned to home variable for easy access and usage
let home = document.getElementById("home");


let instructs = document.getElementById("instructs");
let instructions = document.getElementById("instructions");
console.log(instructions);

instructions.addEventListener("click", howToPlay);

function howToPlay() {
    home.hidden = true;
    instructs.hidden = false;
}



