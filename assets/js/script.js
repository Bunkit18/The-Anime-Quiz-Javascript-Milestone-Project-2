// main three Divs assigned to variable for easy access and usage
let home = document.getElementById("home");
let instructs = document.getElementById("instructs");
let quiz = document.getElementById("quiz");

const quizQA = {
    question1: {
        question: "What is Naruto's sage mode called in Naruto?",
        answers: ["Toad Sage Mode", "Snake Sage Mode", "Lizard Sage Mode", "Dragon Sage Mode"]
    },
    
    question2: {
        question: "Who is Rin Okumura's father in Blue Exocist?",
        answers: ["Shiro Fujimoto", "Satan", "Yukio Okumura", "Igor Neuhaus"]
    },
    
    question3: {
        question: "What is the name of the guild Kirito joins in Sword Art Online?",
        answers: ["Moonlit Black Cats", "Knights of the Blood", "Aincrad Liberation Force", "Titan's Hand"]
    },

    question4: {
        question: "Who is NOT a member of the Future Gadget Lab in Steins;Gate?",
        answers: ["Itaru Hashida", "Kiryuu Moeka", "Kurisu Makise", "Yugo Tennouji"]
    }, 

    question5: {
        question: "",
        answers: ["Toad Sage Mode", "Snake Sage Mode", "Lizard Sage Mode", "Dragon Sage Mode"]
    } 
}

//add event listener to how to play button
let instructions = document.getElementById("instructions");
instructions.addEventListener("click", howToPlay);

// add event listener to return home button
let instructHome = document.getElementById("instruct-home");
instructHome.addEventListener("click", returnHome);

// add event listener to start quiz button
let startQuiz = document.getElementById("play-game");
startQuiz.addEventListener("click", playQuiz);

function howToPlay() {
    home.hidden = true;
    instructs.hidden = false;
}

function returnHome() {
    home.hidden = false;
    instructs.hidden = true;
    quiz.hidden = true;
}

function playQuiz() {

}



